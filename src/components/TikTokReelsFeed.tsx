import React, { useState, useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { 
  Play, 
  Pause, 
  Heart, 
  MessageSquare, 
  Share2, 
  Volume2, 
  VolumeX, 
  Layers, 
  ChevronUp, 
  ChevronDown, 
  Sparkles, 
  Film, 
  Compass, 
  Check, 
  Flame,
  ArrowRight
} from 'lucide-react';
import { Novela, Comment } from '../types';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';
import { CommentsSection } from './CommentsSection';

interface TikTokReelsFeedProps {
  novelas: Novela[];
  onOpenDetails: (novela: Novela) => void;
  onWatchEpisode: (novela: Novela, episodeNumber?: number) => void;
  likedNovelas: Record<string, boolean>;
  onToggleLikeNovela: (novelaId: string) => void;
  comments: Comment[];
  onAddComment: (comment: Omit<Comment, 'id' | 'createdAt' | 'likesCount' | 'isLiked'>) => void;
  onLikeComment: (commentId: string) => void;
  onReplyComment: (commentId: string, replyText: string) => void;
  userName: string;
  onSwitchToCatalog: () => void;
}

export const TikTokReelsFeed: React.FC<TikTokReelsFeedProps> = ({
  novelas,
  onOpenDetails,
  onWatchEpisode,
  likedNovelas,
  onToggleLikeNovela,
  comments,
  onAddComment,
  onLikeComment,
  onReplyComment,
  userName,
  onSwitchToCatalog,
}) => {
  const [feedDramas, setFeedDramas] = useState<Novela[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // Start muted to comply with browser autoplay security policy and start instantly
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isBuffering, setIsBuffering] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [copiedLink, setCopiedLink] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const isWheelLockedRef = useRef(false);
  const wheelLockTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize and populate feed dramas
  useEffect(() => {
    if (novelas.length > 0) {
      const valid = novelas.filter(n => n.episodes && n.episodes.length > 0);
      setFeedDramas(valid);
    }
  }, [novelas]);

  const currentDrama = feedDramas[currentIndex] || feedDramas[0];
  const currentEp1 = currentDrama?.episodes?.[0];

  // Video Streaming via HLS proxy with bulletproof autoplay & CORS handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !currentEp1) return;

    setIsBuffering(true);

    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    // Always ensure stream goes through proxy to bypass Aliyun OSS / CloudFront CORS
    const rawSrc = currentEp1.videoUrl;
    let videoSrc = rawSrc;
    if (rawSrc.startsWith('http')) {
      videoSrc = `/api/freereels/stream?url=${encodeURIComponent(rawSrc)}`;
    } else if (!rawSrc.startsWith('/api/freereels/stream')) {
      videoSrc = `/api/freereels/stream?url=${encodeURIComponent(rawSrc)}`;
    }

    const isHls = videoSrc.includes('.m3u8') || rawSrc.includes('.m3u8');

    // Force clear buffering on any playback activity
    const clearBuffering = () => {
      setIsBuffering(false);
    };

    const attemptPlay = () => {
      if (!video) return;
      video.muted = isMuted;
      video.play()
        .then(() => {
          setIsPlaying(true);
          setIsBuffering(false);
        })
        .catch(() => {
          // If browser rejected unmuted play, fallback to muted play immediately
          video.muted = true;
          setIsMuted(true);
          video.play()
            .then(() => {
              setIsPlaying(true);
              setIsBuffering(false);
            })
            .catch(() => {
              setIsBuffering(false);
              setIsPlaying(false);
            });
        });
    };

    video.addEventListener('canplay', () => {
      clearBuffering();
      attemptPlay();
    });
    video.addEventListener('playing', clearBuffering);
    video.addEventListener('timeupdate', () => {
      if (video.currentTime > 0.05) clearBuffering();
    });
    video.addEventListener('waiting', () => {
      // Only set buffering if video really hasn't started or is seeking
      if (video.readyState < 3) setIsBuffering(true);
    });

    // Safety timeout: never leave user stuck in processing for more than 1.8s
    const safetyTimer = setTimeout(() => {
      setIsBuffering(false);
      attemptPlay();
    }, 1800);

    if (isHls) {
      if (Hls.isSupported()) {
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 30,
          maxBufferLength: 30,
        });
        hlsRef.current = hls;

        hls.loadSource(videoSrc);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          clearBuffering();
          attemptPlay();
        });

        hls.on(Hls.Events.ERROR, (_event, data) => {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                hls.startLoad();
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                hls.recoverMediaError();
                break;
              default:
                hls.destroy();
                video.src = videoSrc;
                clearBuffering();
                break;
            }
          }
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
        video.addEventListener('loadedmetadata', () => {
          clearBuffering();
          attemptPlay();
        });
      }
    } else {
      video.src = videoSrc;
      video.addEventListener('loadeddata', () => {
        clearBuffering();
        attemptPlay();
      });
    }

    return () => {
      clearTimeout(safetyTimer);
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
      video.removeEventListener('canplay', clearBuffering);
      video.removeEventListener('playing', clearBuffering);
    };
  }, [currentIndex, currentEp1?.id, currentDrama?.id]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    setHasInteracted(true);
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    setHasInteracted(true);
    const nextMute = !isMuted;
    videoRef.current.muted = nextMute;
    setIsMuted(nextMute);
  };

  const unmuteAndPlay = () => {
    if (!videoRef.current) return;
    setHasInteracted(true);
    videoRef.current.muted = false;
    setIsMuted(false);
    videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  const goToNext = () => {
    if (currentIndex < feedDramas.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // loop back
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Mouse Wheel / Trackpad scroll detection: scrolling down flips to next drama!
  const handleWheel = (e: React.WheelEvent) => {
    if (showComments) return;
    if (isWheelLockedRef.current) return;

    if (Math.abs(e.deltaY) > 20) {
      isWheelLockedRef.current = true;
      if (e.deltaY > 0) {
        goToNext();
      } else {
        goToPrev();
      }

      if (wheelLockTimerRef.current) clearTimeout(wheelLockTimerRef.current);
      wheelLockTimerRef.current = setTimeout(() => {
        isWheelLockedRef.current = false;
      }, 450);
    }
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showComments) return;
      if (e.code === 'ArrowDown' || e.code === 'PageDown') {
        e.preventDefault();
        goToNext();
      } else if (e.code === 'ArrowUp' || e.code === 'PageUp') {
        e.preventDefault();
        goToPrev();
      } else if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'm' || e.key === 'M') {
        toggleMute();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, feedDramas.length, showComments, isPlaying, isMuted]);

  // Touch swipe detection for mobile reels
  const touchStartY = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    if (diff > 45) {
      goToNext();
    } else if (diff < -45) {
      goToPrev();
    }
    touchStartY.current = null;
  };

  // Double tap to like
  const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const heartId = Date.now();
    setFloatingHearts(prev => [...prev, { id: heartId, x, y }]);
    setTimeout(() => {
      setFloatingHearts(prev => prev.filter(h => h.id !== heartId));
    }, 900);

    if (currentDrama && !likedNovelas[currentDrama.id]) {
      onToggleLikeNovela(currentDrama.id);
      soundManager.playLikeSound();
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  if (!currentDrama) {
    return (
      <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center p-6 text-center">
        <Sparkles className="w-12 h-12 text-rose-500 animate-spin mb-4" />
        <p className="text-white font-black text-xl">Conectando ao Feed FreeReels...</p>
        <p className="text-slate-400 text-sm mt-1">Carregando episódios com streaming vertical HD</p>
      </div>
    );
  }

  const isLiked = !!likedNovelas[currentDrama.id];
  const dramaComments = comments.filter(c => c.novelaId === currentDrama.id);

  return (
    <div 
      ref={containerRef}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 z-30 w-full h-[100dvh] bg-black overflow-hidden select-none flex items-center justify-center"
    >
      {/* Dynamic blurred ambient glow behind the vertical video */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-3xl opacity-35 scale-125 pointer-events-none transition-all duration-700"
        style={{ backgroundImage: `url(${currentDrama.coverUrl})` }}
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Main 9:16 Fullscreen Vertical Player Container */}
      <div className="relative w-full h-full max-w-[500px] sm:aspect-[9/16] sm:max-h-[98dvh] sm:rounded-3xl overflow-hidden bg-black shadow-2xl flex flex-col justify-between border-0 sm:border sm:border-white/10">
        
        {/* Floating Heart Animations */}
        {floatingHearts.map(heart => (
          <div
            key={heart.id}
            style={{ left: heart.x - 24, top: heart.y - 24 }}
            className="absolute z-50 pointer-events-none animate-float-heart"
          >
            <Heart className="w-16 h-16 text-rose-500 fill-rose-500 filter drop-shadow-[0_0_15px_rgba(244,63,94,0.9)]" />
          </div>
        ))}

        {/* Video Area */}
        <div 
          className="absolute inset-0 z-10 flex items-center justify-center bg-black cursor-pointer"
          onClick={togglePlay}
          onDoubleClick={handleDoubleClick}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            loop
            muted={isMuted}
            autoPlay
          />

          {/* Buffering Indicator */}
          {isBuffering && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-[2px] z-20 pointer-events-none">
              <div className="w-14 h-14 rounded-full border-4 border-rose-500 border-t-transparent animate-spin mb-2" />
              <p className="text-white text-xs font-bold tracking-wide">Abrindo Episódio 1...</p>
            </div>
          )}

          {/* Paused Indicator */}
          {!isPlaying && !isBuffering && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-20 pointer-events-none">
              <div className="w-20 h-20 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-2xl scale-110">
                <Play className="w-9 h-9 fill-white ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* Unmute Prompt Banner if video is playing muted */}
        {isMuted && !isBuffering && (
          <div 
            onClick={(e) => {
              e.stopPropagation();
              unmuteAndPlay();
            }}
            className="absolute top-20 left-1/2 -translate-x-1/2 z-40 px-4 py-2 rounded-full bg-rose-600/90 hover:bg-rose-500 text-white font-extrabold text-xs shadow-2xl flex items-center gap-2 cursor-pointer animate-bounce backdrop-blur-md border border-white/20"
          >
            <VolumeX className="w-4 h-4 text-white" />
            <span>Toque para Ativar o Áudio 🔊</span>
          </div>
        )}

        {/* Top Header Floating Controls */}
        <div className="relative z-30 p-3 sm:p-4 flex items-center justify-between bg-gradient-to-b from-black/90 via-black/40 to-transparent">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-rose-600 text-white shadow-lg backdrop-blur-md">
              <Film className="w-3.5 h-3.5" />
              Reels • Ep. 1
            </span>
            <span className="text-[11px] font-bold text-slate-200 bg-black/60 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-md">
              #{currentIndex + 1} de {feedDramas.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Switch to Grid Catalog */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSwitchToCatalog();
              }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/15 transition cursor-pointer"
              title="Alternar para catálogo em grade"
            >
              <Compass className="w-3.5 h-3.5 text-rose-400" />
              <span>Catálogo</span>
            </button>

            {/* Audio Mute/Unmute */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/10 transition cursor-pointer"
              title={isMuted ? 'Ativar Som' : 'Silenciar'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>
          </div>
        </div>

        {/* Desktop Up/Down Chevrons for Mouse Users */}
        <div className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-30 flex-col gap-2 pointer-events-auto">
          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            disabled={currentIndex === 0}
            className="p-3 rounded-full bg-black/60 hover:bg-black/90 disabled:opacity-30 backdrop-blur-md text-white border border-white/15 transition cursor-pointer hover:scale-110 active:scale-95 shadow-xl"
            title="Drama anterior (Scroll Cima ou Seta Cima)"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="p-3 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-white/15 transition cursor-pointer hover:scale-110 active:scale-95 shadow-xl"
            title="Próximo drama (Scroll Baixo ou Seta Baixo)"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Right Action Sidebar (TikTok Style with PROMINENT "ASSISTIR" BUTTON) */}
        <div className="absolute right-3 bottom-28 z-30 flex flex-col items-center gap-3.5">
          
          {/* PROMINENT "ASSISTIR" BUTTON -> Opens all 60-80 episodes of this drama */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(currentDrama);
            }}
            className="group flex flex-col items-center gap-1 cursor-pointer animate-pulse hover:animate-none"
            title="Assistir todos os episódios completos desta novela"
          >
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 p-0.5 shadow-2xl shadow-rose-600/60 group-hover:scale-110 transition-transform">
              <div className="w-full h-full rounded-2xl bg-slate-950 flex flex-col items-center justify-center">
                <Play className="w-6 h-6 text-rose-400 fill-rose-400 group-hover:text-white group-hover:fill-white transition-colors ml-0.5" />
              </div>
            </div>
            <span className="text-[10px] font-black text-rose-300 tracking-wider uppercase bg-black/80 px-2 py-0.5 rounded-full border border-rose-500/40 shadow">
              Assistir
            </span>
          </button>

          {/* Like Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleLikeNovela(currentDrama.id);
              if (!isLiked) {
                soundManager.playLikeSound();
                confetti({ particleCount: 20, spread: 60, origin: { y: 0.6 } });
              }
            }}
            className="flex flex-col items-center gap-1 group cursor-pointer"
          >
            <div className={`p-3 rounded-full backdrop-blur-md transition-all group-hover:scale-115 active:scale-90 ${
              isLiked ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/50' : 'bg-black/50 text-white border border-white/10 hover:bg-black/70'
            }`}>
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-white' : ''}`} />
            </div>
            <span className="text-[11px] font-bold text-white drop-shadow">
              {((currentDrama.likesCount + (isLiked ? 1 : 0)) / 1000).toFixed(1)}k
            </span>
          </button>

          {/* Comments Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowComments(prev => !prev);
            }}
            className="flex flex-col items-center gap-1 group cursor-pointer"
          >
            <div className="p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white border border-white/10 transition-all group-hover:scale-115 active:scale-90">
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-white drop-shadow">
              {dramaComments.length || 38}
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
            <div className="p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white border border-white/10 transition-all group-hover:scale-115 active:scale-90">
              {copiedLink ? <Check className="w-5 h-5 text-emerald-400" /> : <Share2 className="w-5 h-5" />}
            </div>
            <span className="text-[11px] font-bold text-white drop-shadow">
              {copiedLink ? 'Copiado!' : 'Partilhar'}
            </span>
          </button>

          {/* Drama Cover Poster Avatar */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(currentDrama);
            }}
            className="w-11 h-14 rounded-xl overflow-hidden border-2 border-white/40 shadow-xl shrink-0 cursor-pointer hover:border-rose-500 transition-all group"
            title="Ver detalhes da novela"
          >
            <img 
              src={currentDrama.coverUrl} 
              alt={currentDrama.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
            />
          </button>
        </div>

        {/* Bottom Metadata & Primary Action Bar */}
        <div className="relative z-30 p-4 pb-6 bg-gradient-to-t from-black via-black/85 to-transparent flex flex-col gap-2.5 text-left">
          
          {/* Category & Rating */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wide bg-rose-600 text-white shadow">
              {currentDrama.category}
            </span>
            <span className="text-xs font-bold text-amber-300 bg-black/70 px-2 py-0.5 rounded-full border border-white/10">
              ★ {currentDrama.rating}
            </span>
            <span className="text-xs font-semibold text-slate-300">
              {currentDrama.totalEpisodes} Episódios
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-black text-white line-clamp-1 drop-shadow leading-tight">
            {currentDrama.title}
          </h3>

          {/* Synopsis Snippet */}
          <p className="text-xs text-slate-300 line-clamp-2 drop-shadow leading-relaxed">
            {currentDrama.synopsis}
          </p>

          {/* Main Action Button: "Ver Todos os Episódios" */}
          <div className="flex items-center gap-2 mt-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetails(currentDrama);
              }}
              className="flex-1 py-3 px-4 rounded-2xl font-black text-xs sm:text-sm text-white bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 shadow-xl shadow-rose-950/70 flex items-center justify-center gap-2.5 transition-all transform active:scale-95 cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              <span>Ver Todos os Episódios ({currentDrama.totalEpisodes})</span>
              <ArrowRight className="w-4 h-4 ml-auto" />
            </button>
          </div>
        </div>

        {/* Comments Drawer Modal */}
        {showComments && (
          <div 
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-x-0 bottom-0 top-1/4 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-white/15 rounded-t-3xl p-4 flex flex-col animate-slide-up shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-rose-500" />
                <h4 className="font-bold text-sm text-white">Comentários ({dramaComments.length})</h4>
              </div>
              <button
                onClick={() => setShowComments(false)}
                className="p-1 rounded-full text-slate-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-2">
              <CommentsSection
                novela={currentDrama}
                currentEpisode={currentEp1 || currentDrama.episodes[0]}
                comments={comments}
                onAddComment={onAddComment}
                onLikeComment={onLikeComment}
                onReplyComment={onReplyComment}
                userName={userName}
                onClose={() => setShowComments(false)}
                isDrawer={true}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
