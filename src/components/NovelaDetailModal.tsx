import React, { useState } from 'react';
import { 
  X, 
  Play, 
  Heart, 
  Plus, 
  Check, 
  Star, 
  Film, 
  MessageSquare, 
  Users, 
  Clock, 
  Calendar,
  Share2,
  Layers,
  Search,
  Sparkles
} from 'lucide-react';
import { Novela, Episode, Comment, WatchHistoryItem } from '../types';
import { CommentsSection } from './CommentsSection';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';

interface NovelaDetailModalProps {
  novela: Novela;
  onClose: () => void;
  onWatchEpisode: (novela: Novela, episodeNumber: number) => void;
  isLiked: boolean;
  onToggleLike: (novelaId: string) => void;
  isInMyList: boolean;
  onToggleMyList: (novelaId: string) => void;
  historyItem?: WatchHistoryItem;
  comments: Comment[];
  onAddComment: (newComment: Omit<Comment, 'id' | 'createdAt' | 'likesCount' | 'isLiked'>) => void;
  onLikeComment: (commentId: string) => void;
  onReplyComment: (commentId: string, replyText: string) => void;
  userName: string;
}

export const NovelaDetailModal: React.FC<NovelaDetailModalProps> = ({
  novela,
  onClose,
  onWatchEpisode,
  isLiked,
  onToggleLike,
  isInMyList,
  onToggleMyList,
  historyItem,
  comments,
  onAddComment,
  onLikeComment,
  onReplyComment,
  userName,
}) => {
  const [activeTab, setActiveTab] = useState<'episodes' | 'comments' | 'cast'>('episodes');
  const [copiedLink, setCopiedLink] = useState(false);
  const [episodeBatch, setEpisodeBatch] = useState<string>('all');
  const [episodeSearch, setEpisodeSearch] = useState<string>('');

  const batches = [];
  const total = novela.episodes.length;
  for (let i = 1; i <= total; i += 20) {
    const end = Math.min(i + 19, total);
    batches.push(`${i}-${end}`);
  }

  const filteredEpisodes = novela.episodes.filter(ep => {
    if (episodeSearch.trim()) {
      const q = episodeSearch.toLowerCase().replace(/^(ep|ep\.|episodio|episódio)\s*/i, '');
      return ep.title.toLowerCase().includes(q) || String(ep.episodeNumber) === q;
    }
    if (episodeBatch === 'all') return true;
    const [start, end] = episodeBatch.split('-').map(Number);
    return ep.episodeNumber >= start && ep.episodeNumber <= end;
  });

  const startEpNumber = historyItem ? historyItem.episodeNumber : 1;

  const handleLike = () => {
    onToggleLike(novela.id);
    if (!isLiked) {
      soundManager.playLikeSound();
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#f43f5e', '#ec4899', '#fbbf24']
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-slate-300 hover:text-white transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header with Backdrop Banner */}
        <div className="relative h-64 sm:h-80 w-full shrink-0 overflow-hidden bg-slate-950">
          <img
            src={novela.bannerUrl}
            alt={novela.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent" />

          {/* Header Content Overlay */}
          <div className="absolute bottom-4 left-4 sm:left-8 right-4 sm:right-8 flex gap-4 sm:gap-6 items-end">
            <img
              src={novela.coverUrl}
              alt={novela.title}
              className="w-24 sm:w-32 aspect-[3/4] object-cover rounded-xl shadow-2xl border-2 border-white/20 shrink-0 hidden xs:block"
            />
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-600 text-white shadow">
                  {novela.category}
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-amber-300 bg-black/50 px-2 py-0.5 rounded-full border border-white/10">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  {novela.rating}
                </span>
                <span className="text-xs text-slate-300">
                  {novela.totalEpisodes} Episódios
                </span>
                <span className="text-xs text-slate-400">
                  • {novela.views} views
                </span>
              </div>

              <h2 className="text-xl sm:text-3xl font-black text-white font-display tracking-tight line-clamp-2">
                {novela.title}
              </h2>
              
              <p className="text-xs sm:text-sm text-rose-300 font-semibold line-clamp-1 mt-1">
                {novela.tagline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 mt-3">
                <button
                  onClick={() => onWatchEpisode(novela, startEpNumber)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-rose-950/60 transition cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{historyItem ? `Continuar Ep. ${historyItem.episodeNumber}` : 'Assistir Ep. 1'}</span>
                </button>

                <button
                  onClick={handleLike}
                  className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition border cursor-pointer ${
                    isLiked
                      ? 'bg-rose-500/20 border-rose-500 text-rose-400'
                      : 'bg-white/10 hover:bg-white/15 border-white/10 text-white'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500' : ''}`} />
                  <span>{isLiked ? 'Curtido' : 'Curtir'}</span>
                </button>

                <button
                  onClick={() => onToggleMyList(novela.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition border cursor-pointer ${
                    isInMyList
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                      : 'bg-white/10 hover:bg-white/15 border-white/10 text-white'
                  }`}
                >
                  {isInMyList ? <Check className="w-4 h-4 text-emerald-400" /> : <Plus className="w-4 h-4" />}
                  <span>{isInMyList ? 'Salvo' : 'Salvar'}</span>
                </button>

                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white transition cursor-pointer"
                  title="Compartilhar"
                >
                  <Share2 className="w-4 h-4" />
                </button>

                {copiedLink && (
                  <span className="text-xs font-bold text-emerald-400 animate-in fade-in">
                    Link copiado!
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-4 px-6 sm:px-8 border-b border-white/10 bg-slate-900/60 text-sm font-semibold">
          <button
            onClick={() => setActiveTab('episodes')}
            className={`py-3.5 border-b-2 transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'episodes'
                ? 'border-rose-500 text-white font-bold'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Film className="w-4 h-4 text-rose-400" />
            <span>Episódios ({novela.episodes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('comments')}
            className={`py-3.5 border-b-2 transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'comments'
                ? 'border-rose-500 text-white font-bold'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-rose-400" />
            <span>Comentários ({comments.filter(c => c.novelaId === novela.id).length})</span>
          </button>

          <button
            onClick={() => setActiveTab('cast')}
            className={`py-3.5 border-b-2 transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'cast'
                ? 'border-rose-500 text-white font-bold'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4 text-rose-400" />
            <span>Sinopse & Elenco</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          
          {/* Episodes Tab */}
          {activeTab === 'episodes' && (
            <div className="space-y-4">
              
              {/* Episodes Header & Server status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl bg-slate-950/60 border border-white/5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-white">
                    {novela.episodes.length} Episódios Disponíveis
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
                    Servidor FreeReels
                  </span>
                </div>

                {/* Quick Search / Jump Input */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Filtrar por número ou nome..."
                    value={episodeSearch}
                    onChange={(e) => setEpisodeSearch(e.target.value)}
                    className="w-full sm:w-56 bg-slate-900/90 border border-white/10 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                  />
                  {episodeSearch && (
                    <button
                      onClick={() => setEpisodeSearch('')}
                      className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Episode Batch Tabs */}
              {batches.length > 1 && !episodeSearch && (
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                  <button
                    onClick={() => setEpisodeBatch('all')}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold shrink-0 transition cursor-pointer ${
                      episodeBatch === 'all'
                        ? 'bg-rose-600 text-white shadow-md'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
                    }`}
                  >
                    Todos ({novela.episodes.length})
                  </button>
                  {batches.map(b => (
                    <button
                      key={b}
                      onClick={() => setEpisodeBatch(b)}
                      className={`px-3 py-1 rounded-xl text-xs font-semibold shrink-0 transition cursor-pointer ${
                        episodeBatch === b
                          ? 'bg-rose-600 text-white shadow-md'
                          : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
                      }`}
                    >
                      Ep. {b}
                    </button>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredEpisodes.map(ep => {
                  const isCurrentWatched = historyItem?.episodeNumber === ep.episodeNumber;
                  return (
                    <button
                      key={ep.id}
                      onClick={() => onWatchEpisode(novela, ep.episodeNumber)}
                      className="group flex gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-rose-500/40 text-left transition cursor-pointer"
                    >
                      <div className="relative w-24 sm:w-28 aspect-[16/10] rounded-xl overflow-hidden bg-black shrink-0">
                        <img
                          src={ep.thumbnailUrl}
                          alt={ep.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-rose-950/40 flex items-center justify-center transition-colors">
                          <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                          </div>
                        </div>
                        <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[10px] text-white font-mono">
                          {ep.duration}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                        <div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-white group-hover:text-rose-400 transition-colors truncate">
                              {ep.title}
                            </span>
                            {isCurrentWatched && (
                              <span className="text-[10px] font-bold text-cyan-400 bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-800/50 shrink-0 ml-1">
                                Em progresso
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                            {ep.synopsisSnippet}
                          </p>
                        </div>

                        <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-2">
                          <span className="flex items-center gap-1">
                            <Heart className="w-3 h-3 text-rose-500" />
                            {ep.likesCount.toLocaleString('pt-BR')}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-3 h-3 text-slate-400" />
                            {ep.commentsCount}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Comments Tab */}
          {activeTab === 'comments' && (
            <div className="h-[460px]">
              <CommentsSection
                novela={novela}
                currentEpisode={novela.episodes[0]}
                comments={comments}
                onAddComment={onAddComment}
                onLikeComment={onLikeComment}
                onReplyComment={onReplyComment}
                userName={userName}
                isDrawer={false}
              />
            </div>
          )}

          {/* Cast & Synopsis Tab */}
          {activeTab === 'cast' && (
            <div className="space-y-6 text-sm text-slate-300">
              <div>
                <h4 className="font-bold text-white text-base mb-2">Sinopse Completa</h4>
                <p className="leading-relaxed text-slate-300 text-sm sm:text-base">
                  {novela.synopsis}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white text-base mb-3">Elenco Principal</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {novela.cast.map(actor => (
                    <div key={actor} className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center font-bold text-xs text-rose-400 shrink-0">
                        {actor[0]}
                      </div>
                      <span className="font-semibold text-xs text-white truncate">{actor}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400">
                <div>
                  <span className="block text-slate-500 font-medium">Gênero</span>
                  <span className="font-bold text-white mt-0.5 block">{novela.category}</span>
                </div>
                <div>
                  <span className="block text-slate-500 font-medium">Ano de Lançamento</span>
                  <span className="font-bold text-white mt-0.5 block">{novela.releaseYear}</span>
                </div>
                <div>
                  <span className="block text-slate-500 font-medium">Total de Episódios</span>
                  <span className="font-bold text-white mt-0.5 block">{novela.totalEpisodes}</span>
                </div>
                <div>
                  <span className="block text-slate-500 font-medium">Classificação</span>
                  <span className="font-bold text-emerald-400 mt-0.5 block">14+ Anos</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
