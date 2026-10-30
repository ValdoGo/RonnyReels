import React from 'react';
import { Play, Heart, Plus, Check, Star, Eye } from 'lucide-react';
import { Novela, WatchHistoryItem } from '../types';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';

interface NovelaCardProps {
  novela: Novela;
  rank?: number;
  onWatch: (novela: Novela, episodeNumber?: number) => void;
  onOpenDetails: (novela: Novela) => void;
  isLiked: boolean;
  onToggleLike: (novelaId: string) => void;
  isInMyList: boolean;
  onToggleMyList: (novelaId: string) => void;
  historyItem?: WatchHistoryItem;
}

export const NovelaCard: React.FC<NovelaCardProps> = ({
  novela,
  rank,
  onWatch,
  onOpenDetails,
  isLiked,
  onToggleLike,
  isInMyList,
  onToggleMyList,
  historyItem,
}) => {
  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleLike(novela.id);
    if (!isLiked) {
      soundManager.playLikeSound();
      confetti({
        particleCount: 20,
        spread: 45,
        origin: { y: 0.8 },
        colors: ['#f43f5e', '#ec4899', '#fbbf24']
      });
    }
  };

  const handleMyList = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleMyList(novela.id);
  };

  const progressPercent = historyItem && historyItem.durationSeconds > 0
    ? Math.min(100, Math.round((historyItem.progressSeconds / historyItem.durationSeconds) * 100))
    : 0;

  return (
    <div
      onClick={() => onOpenDetails(novela)}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-slate-900/60 border border-white/10 hover:border-rose-500/50 shadow-lg hover:shadow-2xl hover:shadow-rose-950/30 transition-all duration-300 cursor-pointer transform hover:-translate-y-1.5"
    >
      {/* Poster Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-950">
        <img
          src={novela.coverUrl}
          alt={novela.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
          loading="lazy"
        />

        {/* Top Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d14] via-transparent to-black/60 pointer-events-none" />

        {/* Rank Number (if Top 10 carousel) */}
        {rank !== undefined && (
          <div className="absolute top-2 left-2 z-10 w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-rose-600 flex items-center justify-center font-black text-white text-base shadow-lg shadow-black/60 font-display ring-1 ring-white/20">
            #{rank}
          </div>
        )}

        {/* Rating and Episode count top right */}
        <div className="absolute top-2 right-2 z-10 flex flex-col items-end gap-1">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-black/70 backdrop-blur-md text-amber-300 border border-white/10">
            <Star className="w-3 h-3 fill-amber-300" />
            <span>{novela.rating}</span>
          </div>

          <div className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-md text-slate-200 border border-white/10">
            {novela.totalEpisodes} Eps
          </div>
        </div>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 bg-black/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onWatch(novela, historyItem?.episodeNumber || 1);
            }}
            className="w-13 h-13 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white flex items-center justify-center shadow-xl shadow-rose-950/80 hover:scale-110 active:scale-95 transition-transform mb-3 cursor-pointer"
            title="Assistir agora"
          >
            <Play className="w-6 h-6 fill-white ml-0.5" />
          </button>

          <span className="text-xs font-bold text-white text-center line-clamp-1 mb-2">
            {historyItem ? `Continuar Ep. ${historyItem.episodeNumber}` : 'Assistir Ep. 1'}
          </span>

          <div className="flex items-center gap-2">
            {/* Quick Like */}
            <button
              onClick={handleLike}
              className={`p-2 rounded-full border transition cursor-pointer ${
                isLiked
                  ? 'bg-rose-500/30 border-rose-500 text-rose-400'
                  : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
              }`}
              title={isLiked ? "Curtido" : "Curtir"}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500' : ''}`} />
            </button>

            {/* Quick Bookmark */}
            <button
              onClick={handleMyList}
              className={`p-2 rounded-full border transition cursor-pointer ${
                isInMyList
                  ? 'bg-emerald-500/30 border-emerald-500 text-emerald-300'
                  : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
              }`}
              title={isInMyList ? "Remover da lista" : "Salvar na lista"}
            >
              {isInMyList ? <Check className="w-4 h-4 text-emerald-400" /> : <Plus className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Watch Progress Bar (if watched) */}
        {progressPercent > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/60 z-10">
            <div
              className="h-full bg-gradient-to-r from-rose-500 to-pink-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}
      </div>

      {/* Meta Content */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-rose-400 font-semibold mb-1">
            <span className="truncate">{novela.category}</span>
            <span className="text-slate-400 font-normal shrink-0 flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {novela.views}
            </span>
          </div>

          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight line-clamp-1 group-hover:text-rose-300 transition-colors">
            {novela.title}
          </h3>

          <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
            {novela.tagline}
          </p>
        </div>

        {/* Bottom stats & continue hint */}
        <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5 text-rose-400/90 font-medium">
            <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span>{(novela.likesCount + (isLiked ? 1 : 0)).toLocaleString('pt-BR')}</span>
          </div>

          {historyItem ? (
            <span className="text-[10px] text-cyan-400 font-bold bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/40">
              Ep. {historyItem.episodeNumber}
            </span>
          ) : (
            <span className="text-[10px] text-slate-500">
              {novela.releaseYear}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
