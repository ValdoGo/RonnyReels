import React, { useState, useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  SkipBack, 
  SkipForward, 
  Heart, 
  MessageSquare, 
  Share2, 
  Layers, 
  Settings, 
  RotateCcw,
  Sparkles,
  ArrowLeft,
  Check,
  Flame,
  Info,
  Search,
  Subtitles
} from 'lucide-react';
import { Novela, Episode, Comment } from '../types';
import { CommentsSection } from './CommentsSection';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';

interface VideoPlayerProps {
  novela: Novela;
  currentEpisode: Episode;
  onSelectEpisode: (ep: Episode) => void;
  onClose: () => void;
  isLiked: boolean;
  onToggleLike: (novelaId: string, episodeId: string) => void;
  onSaveProgress: (novelaId: string, episodeNumber: number, progress: number, duration: number) => void;
  comments: Comment[];
  onAddComment: (newComment: Omit<Comment, 'id' | 'createdAt' | 'likesCount' | 'isLiked'>) => void;
  onLikeComment: (commentId: string) => void;
  onReplyComment: (commentId: string, replyText: string) => void;
  userName: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  novela,
  currentEpisode,
  onSelectEpisode,
  onClose,
  isLiked,
  onToggleLike,
  onSaveProgress,
  comments,
  onAddComment,
  onLikeComment,
  onReplyComment,
  userName,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(currentEpisode.durationSeconds || 120);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [showEpisodeDrawer, setShowEpisodeDrawer] = useState(false);
  const [showCommentsDrawer, setShowCommentsDrawer] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [nextEpisodeCountdown, setNextEpisodeCountdown] = useState<number | null>(null);
  const [autoPlayNext, setAutoPlayNext] = useState(true);
  const [showSubtitles, setShowSubtitles] = useState(true);
  
  // Floating hearts on double click/tap
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  // Episode drawer batch filter & search
  const [drawerBatch, setDrawerBatch] = useState<string>('all');
  const [drawerSearch, setDrawerSearch] = useState<string>('');

  const episodeBatches = [];
  const totalEps = novela.episodes.length;
  for (let i = 1; i <= totalEps; i += 20) {
    const end = Math.min(i + 19, totalEps);
    episodeBatches.push(`${i}-${end}`);
  }

  const drawerEpisodes = novela.episodes.filter(ep => {
    if (drawerSearch.trim()) {
      const q = drawerSearch.toLowerCase().replace(/^(ep|ep\.|episodio|episódio)\s*/i, '');
      return ep.title.toLowerCase().includes(q) || String(ep.episodeNumber) === q;
    }
    if (drawerBatch === 'all') return true;
    const [start, end] = drawerBatch.split('-').map(Number);
    return ep.episodeNumber >= start && ep.episodeNumber <= end;
  });

  // Find next and previous episodes
  const currentIndex = novela.episodes.findIndex(e => e.id === currentEpisode.id);
  const prevEpisode = currentIndex > 0 ? novela.episodes[currentIndex - 1] : null;
  const nextEpisode = currentIndex < novela.episodes.length - 1 ? novela.episodes[currentIndex + 1] : null;

  // Setup HLS video streaming
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setIsBuffering(true);
    setNextEpisodeCountdown(null);

    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    const rawSrc = currentEpisode.videoUrl;
    // Route any external DramaWave / FreeReels CDN stream through our high-speed CORS proxy
    const videoSrc = (rawSrc.startsWith('http') && rawSrc.includes('mydramawave.com'))
      ? `/api/freereels/stream?url=${encodeURIComponent(rawSrc)}`
      : rawSrc;

    const isHls = videoSrc.includes('.m3u8') || rawSrc.includes('.m3u8');

    const handleVideoReady = () => {
      setIsBuffering(false);
      video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    };

    video.addEventListener('canplay', handleVideoReady);
    video.addEventListener('playing', () => setIsBuffering(false));
    video.addEventListener('waiting', () => setIsBuffering(true));

    if (isHls) {
      if (Hls.isSupported()) {
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 30,
          maxBufferLength: 30,
          maxMaxBufferLength: 60,
          startLevel: -1 // auto select optimal resolution immediately
        });
        hlsRef.current = hls;

        hls.loadSource(videoSrc);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          setIsBuffering(false);
          video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        });

        hls.on(Hls.Events.ERROR, (_event, data) => {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                console.warn('HLS Network error, attempting recovery...');
                hls.startLoad();
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                console.warn('HLS Media error, recovering...');
                hls.recoverMediaError();
                break;
              default:
                console.error('Fatal HLS error:', data.details);
                hls.destroy();
                // Direct fallback to video element
                video.src = videoSrc;
                setIsBuffering(false);
                break;
            }
          }
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native Safari/iOS support
        video.src = videoSrc;
        video.addEventListener('loadedmetadata', handleVideoReady);
      }
    } else {
      // Direct video file (.mp4)
      video.src = videoSrc;
      video.addEventListener('loadeddata', handleVideoReady);
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [currentEpisode.videoUrl, currentEpisode.id]);

  // Handle countdown for autoplaying next episode
  useEffect(() => {
    if (nextEpisodeCountdown === null) return;
    if (nextEpisodeCountdown <= 0) {
      if (nextEpisode) {
        onSelectEpisode(nextEpisode);
      }
      setNextEpisodeCountdown(null);
      return;
    }

    const timer = setTimeout(() => {
      setNextEpisodeCountdown(prev => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearTimeout(timer);
  }, [nextEpisodeCountdown, nextEpisode, onSelectEpisode]);

  // Video event handlers
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || currentEpisode.durationSeconds;
    setCurrentTime(curr);
    if (!isNaN(dur) && dur > 0) {
      setDuration(dur);
    }
    // Periodically save progress
    if (Math.floor(curr) % 3 === 0) {
      onSaveProgress(novela.id, currentEpisode.episodeNumber, Math.floor(curr), Math.floor(dur));
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    if (autoPlayNext && nextEpisode) {
      setNextEpisodeCountdown(3);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMute = !isMuted;
    videoRef.current.muted = nextMute;
    setIsMuted(nextMute);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const changeSpeed = (speed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      setPlaybackSpeed(speed);
      setShowSpeedMenu(false);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Double click / tap to like
  const handleVideoAreaDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const heartId = Date.now();
    setFloatingHearts(prev => [...prev, { id: heartId, x, y }]);
    setTimeout(() => {
      setFloatingHearts(prev => prev.filter(h => h.id !== heartId));
    }, 900);

    if (!isLiked) {
      onToggleLike(novela.id, currentEpisode.id);
      soundManager.playLikeSound();
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
        colors: ['#f43f5e', '#ec4899', '#fbbf24']
      });
    }
  };

  const handleLikeButton = () => {
    onToggleLike(novela.id, currentEpisode.id);
    if (!isLiked) {
      soundManager.playLikeSound();
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#f43f5e', '#ec4899', '#fbbf24']
      });
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2500);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea'].includes((e.target as HTMLElement).tagName.toLowerCase())) {
        return;
      }
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        if (videoRef.current) videoRef.current.currentTime = Math.min(duration, videoRef.current.currentTime + 5);
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        if (videoRef.current) videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 5);
      } else if (e.code === 'ArrowUp' && prevEpisode) {
        e.preventDefault();
        onSelectEpisode(prevEpisode);
      } else if (e.code === 'ArrowDown' && nextEpisode) {
        e.preventDefault();
        onSelectEpisode(nextEpisode);
      } else if (e.key === 'l' || e.key === 'L') {
        handleLikeButton();
      } else if (e.key === 'c' || e.key === 'C') {
        setShowCommentsDrawer(prev => !prev);
      } else if (e.key === 'm' || e.key === 'M') {
        toggleMute();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.code === 'Escape') {
        if (showCommentsDrawer) setShowCommentsDrawer(false);
        else if (showEpisodeDrawer) setShowEpisodeDrawer(false);
        else onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, duration, prevEpisode, nextEpisode, isLiked, showCommentsDrawer, showEpisodeDrawer]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const epCommentsCount = comments.filter(c => c.novelaId === novela.id && c.episodeNumber === currentEpisode.episodeNumber).length;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden select-none"
      onMouseMove={() => {
        setShowControls(true);
      }}
    >
      {/* Background ambient glow blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-3xl opacity-20 scale-125 pointer-events-none"
        style={{ backgroundImage: `url(${currentEpisode.thumbnailUrl})` }}
      />

      {/* Main 9:16 Mobile-First Vertical Player Frame */}
      <div className="relative w-full max-w-[440px] sm:max-w-[480px] h-full sm:h-[94vh] sm:rounded-3xl overflow-hidden bg-slate-950 border border-white/10 shadow-2xl flex flex-col justify-between">
        
        {/* Floating Heart Animations */}
        {floatingHearts.map(heart => (
          <div
            key={heart.id}
            style={{ left: heart.x - 24, top: heart.y - 24 }}
            className="absolute z-40 pointer-events-none animate-float-heart"
          >
            <Heart className="w-14 h-14 text-rose-500 fill-rose-500 filter drop-shadow-[0_0_12px_rgba(244,63,94,0.8)]" />
          </div>
        ))}

        {/* Video Element with Double Click detection */}
        <div 
          className="absolute inset-0 z-10 flex items-center justify-center bg-black cursor-pointer"
          onClick={togglePlay}
          onDoubleClick={handleVideoAreaDoubleClick}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            crossOrigin="anonymous"
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
            onWaiting={() => setIsBuffering(true)}
            onPlaying={() => setIsBuffering(false)}
          >
            {currentEpisode.subtitleUrl && (
              <track 
                kind="subtitles" 
                src={currentEpisode.subtitleUrl} 
                srcLang="pt" 
                label="Português" 
                default={showSubtitles} 
              />
            )}
          </video>

          {/* Buffering spinner */}
          {isBuffering && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] z-20 pointer-events-none">
              <div className="w-12 h-12 rounded-full border-4 border-rose-500 border-t-transparent animate-spin" />
            </div>
          )}

          {/* Play/Pause center overlay indicator when paused */}
          {!isPlaying && !isBuffering && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/35 z-20 pointer-events-none">
              <div className="w-18 h-18 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-2xl scale-110 animate-in fade-in zoom-in duration-150">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* Top Header Bar */}
        <div className={`relative z-30 p-4 flex items-center justify-between bg-gradient-to-b from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/10 transition cursor-pointer"
              title="Voltar"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="text-left">
              <h2 className="text-sm font-extrabold text-white line-clamp-1 drop-shadow">
                {novela.title}
              </h2>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[11px] font-semibold text-rose-400">
                  Ep. {currentEpisode.episodeNumber} de {novela.totalEpisodes} • {currentEpisode.title}
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  HLS HD
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Subtitle toggle */}
            {currentEpisode.subtitleUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const nextVal = !showSubtitles;
                  setShowSubtitles(nextVal);
                  if (videoRef.current && videoRef.current.textTracks) {
                    for (let i = 0; i < videoRef.current.textTracks.length; i++) {
                      videoRef.current.textTracks[i].mode = nextVal ? 'showing' : 'hidden';
                    }
                  }
                }}
                className={`p-2 rounded-full backdrop-blur-md border transition cursor-pointer ${
                  showSubtitles
                    ? 'bg-rose-600/80 hover:bg-rose-600 text-white border-rose-500 shadow'
                    : 'bg-black/40 hover:bg-black/60 text-slate-400 border-white/10'
                }`}
                title={showSubtitles ? 'Desativar Legendas' : 'Ativar Legendas (Português)'}
              >
                <Subtitles className="w-4 h-4" />
              </button>
            )}

            {/* Speed menu button */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSpeedMenu(!showSpeedMenu);
                }}
                className="px-2.5 py-1 rounded-full text-xs font-bold bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/10 transition cursor-pointer"
              >
                {playbackSpeed}x
              </button>

              {showSpeedMenu && (
                <div 
                  onClick={(e) => e.stopPropagation()}
                  className="absolute right-0 mt-2 bg-slate-900 border border-white/10 rounded-xl shadow-2xl p-1 z-50 flex flex-col min-w-[90px]"
                >
                  {[0.75, 1.0, 1.25, 1.5, 2.0].map(s => (
                    <button
                      key={s}
                      onClick={() => changeSpeed(s)}
                      className={`px-3 py-1.5 text-xs text-left rounded-lg transition font-medium ${
                        playbackSpeed === s ? 'bg-rose-600 text-white font-bold' : 'text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {s}x
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mute toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/10 transition cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Fullscreen toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFullscreen();
              }}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/10 transition cursor-pointer"
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Right Action Sidebar (TikTok / ReelShort style) */}
        <div className={`absolute right-3 bottom-24 z-30 flex flex-col items-center gap-4.5 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          {/* Like Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleLikeButton();
            }}
            className="flex flex-col items-center gap-1 group cursor-pointer"
          >
            <div className={`w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md border transition-all transform active:scale-90 ${
              isLiked
                ? 'bg-rose-500/30 border-rose-500 text-rose-500 scale-105'
                : 'bg-black/50 hover:bg-black/70 border-white/15 text-white'
            }`}>
              <Heart className={`w-6 h-6 transition-transform group-hover:scale-115 ${isLiked ? 'fill-rose-500' : ''}`} />
            </div>
            <span className="text-[11px] font-bold text-white drop-shadow">
              {(currentEpisode.likesCount + (isLiked ? 1 : 0)).toLocaleString('pt-BR')}
            </span>
          </button>

          {/* Comments Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowCommentsDrawer(true);
            }}
            className="flex flex-col items-center gap-1 group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/15 text-white flex items-center justify-center transition-all transform active:scale-90 group-hover:scale-105">
              <MessageSquare className="w-5 h-5 text-slate-100" />
            </div>
            <span className="text-[11px] font-bold text-white drop-shadow">
              {epCommentsCount || currentEpisode.commentsCount}
            </span>
          </button>

          {/* Episode List Selector Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowEpisodeDrawer(true);
            }}
            className="flex flex-col items-center gap-1 group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/15 text-white flex items-center justify-center transition-all transform active:scale-90 group-hover:scale-105">
              <Layers className="w-5 h-5 text-amber-400" />
            </div>
            <span className="text-[11px] font-bold text-white drop-shadow">
              Episódios
            </span>
          </button>

          {/* Share Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleShare();
            }}
            className="flex flex-col items-center gap-1 group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/15 text-white flex items-center justify-center transition-all transform active:scale-90 group-hover:scale-105">
              <Share2 className="w-5 h-5 text-slate-100" />
            </div>
            <span className="text-[11px] font-bold text-white drop-shadow">
              Compartilhar
            </span>
          </button>
        </div>

        {/* Autoplay Next Episode Countdown Overlay */}
        {nextEpisodeCountdown !== null && nextEpisode && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 bg-slate-900/90 backdrop-blur-xl border border-rose-500/40 rounded-2xl p-5 shadow-2xl text-center max-w-[280px] w-full animate-in zoom-in duration-200">
            <Flame className="w-8 h-8 text-rose-500 mx-auto mb-2 animate-bounce" />
            <h4 className="text-sm font-bold text-white">Próximo Episódio</h4>
            <p className="text-xs text-slate-300 mt-1 line-clamp-1">{nextEpisode.title}</p>
            <div className="text-2xl font-black text-rose-400 my-2 font-display">
              {nextEpisodeCountdown}s
            </div>
            <div className="flex gap-2 justify-center mt-3">
              <button
                onClick={() => setNextEpisodeCountdown(null)}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-slate-300"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  onSelectEpisode(nextEpisode);
                  setNextEpisodeCountdown(null);
                }}
                className="px-4 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-xs font-bold text-white shadow"
              >
                Assistir Agora
              </button>
            </div>
          </div>
        )}

        {/* Share Toast */}
        {showShareToast && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-40 bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 animate-in fade-in duration-150">
            <Check className="w-4 h-4" />
            <span>Link da novela copiado!</span>
          </div>
        )}

        {/* Bottom Seeker & Playback Controls Bar */}
        <div className={`relative z-30 p-4 pt-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Seeker slider */}
          <div className="relative flex items-center group/slider mb-3">
            <input
              type="range"
              min={0}
              max={duration || 100}
              step={0.5}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-rose-500 hover:h-2.5 transition-all"
            />
          </div>

          {/* Time, Episodes & Navigation Controls */}
          <div className="flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="font-medium text-white">{formatTime(currentTime)}</span>
              <span className="text-slate-500">/</span>
              <span>{formatTime(duration)}</span>
            </div>

            {/* Quick Prev / Next Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (prevEpisode) onSelectEpisode(prevEpisode);
                }}
                disabled={!prevEpisode}
                className="p-1.5 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition text-white"
                title="Episódio anterior"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="p-2 rounded-full bg-rose-600 hover:bg-rose-500 text-white shadow-md"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (nextEpisode) onSelectEpisode(nextEpisode);
                }}
                disabled={!nextEpisode}
                className="p-1.5 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition text-white"
                title="Próximo episódio"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Side / Bottom Drawer for Episode Selector */}
        {showEpisodeDrawer && (
          <div 
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col p-4 animate-in slide-in-from-bottom-6 duration-200"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-400" />
                <div>
                  <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                    <span>Todos os Episódios</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-rose-600/30 text-rose-300 border border-rose-500/30">
                      {novela.episodes.length} eps
                    </span>
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setShowEpisodeDrawer(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative mb-2">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Ir para episódio ou buscar título..."
                value={drawerSearch}
                onChange={(e) => setDrawerSearch(e.target.value)}
                className="w-full bg-slate-900 border border-white/10 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
              />
              {drawerSearch && (
                <button
                  onClick={() => setDrawerSearch('')}
                  className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Episode Batch Tabs */}
            {episodeBatches.length > 1 && !drawerSearch && (
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-2 no-scrollbar shrink-0">
                <button
                  onClick={() => setDrawerBatch('all')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold shrink-0 transition cursor-pointer ${
                    drawerBatch === 'all'
                      ? 'bg-rose-600 text-white shadow'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
                  }`}
                >
                  Todos ({novela.episodes.length})
                </button>
                {episodeBatches.map(b => (
                  <button
                    key={b}
                    onClick={() => setDrawerBatch(b)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold shrink-0 transition cursor-pointer ${
                      drawerBatch === b
                        ? 'bg-rose-600 text-white shadow'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
                    }`}
                  >
                    Ep. {b}
                  </button>
                ))}
              </div>
            )}

            {/* Episode List */}
            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {drawerEpisodes.length === 0 ? (
                <div className="py-8 text-center text-xs text-slate-400">
                  Nenhum episódio encontrado para "{drawerSearch}".
                </div>
              ) : (
                drawerEpisodes.map(ep => {
                  const isCurrent = ep.id === currentEpisode.id;
                  return (
                    <button
                      key={ep.id}
                      onClick={() => {
                        onSelectEpisode(ep);
                        setShowEpisodeDrawer(false);
                      }}
                      className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition border cursor-pointer ${
                        isCurrent
                          ? 'bg-rose-600/30 border-rose-500 text-white font-bold'
                          : 'bg-white/5 hover:bg-white/10 border-white/5 text-slate-300'
                      }`}
                    >
                      <div className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-slate-900">
                        <img src={ep.thumbnailUrl} alt={ep.title} className="w-full h-full object-cover" />
                        {isCurrent && (
                          <div className="absolute inset-0 bg-rose-600/60 flex items-center justify-center">
                            <Play className="w-4 h-4 fill-white" />
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold truncate">{ep.title}</span>
                          <span className="text-[11px] text-slate-400 shrink-0 ml-2">{ep.duration}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                          {ep.synopsisSnippet}
                        </p>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* Side / Bottom Drawer for Comments */}
        {showCommentsDrawer && (
          <div 
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col animate-in slide-in-from-bottom-6 duration-200"
          >
            <div className="flex-1 overflow-hidden">
              <CommentsSection
                novela={novela}
                currentEpisode={currentEpisode}
                comments={comments}
                onAddComment={onAddComment}
                onLikeComment={onLikeComment}
                onReplyComment={onReplyComment}
                userName={userName}
                onClose={() => setShowCommentsDrawer(false)}
                isDrawer={true}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
