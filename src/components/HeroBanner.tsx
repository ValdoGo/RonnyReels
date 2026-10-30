import React from 'react';
import { Play, Plus, Check, Heart, Star, Sparkles, Film, Info } from 'lucide-react';
import { Novela } from '../types';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';

interface HeroBannerProps {
  novela: Novela;
  onWatch: (novela: Novela, episodeNumber?: number) => void;
  onOpenDetails: (novela: Novela) => void;
  isLiked: boolean;
  onToggleLike: (novelaId: string) => void;
  isInMyList: boolean;
  onToggleMyList: (novelaId: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  novela,
  onWatch,
  onOpenDetails,
  isLiked,
  onToggleLike,
  isInMyList,
  onToggleMyList,
}) => {
  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleLike(novela.id);
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

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-slate-900 border border-white/10 shadow-2xl group mb-10">
      {/* Background Image with Cinematic Gradient Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={novela.bannerUrl}
          alt={novela.title}
          className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Layered cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d14] via-[#0c0d14]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d14] via-[#0c0d14]/80 to-transparent" />
        <div className="absolute inset-0 bg-radial-at-c from-rose-950/20 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl p-6 sm:p-10 lg:p-14 flex flex-col justify-end min-h-[460px] sm:min-h-[520px]">
        
        {/* Badges bar */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg shadow-rose-900/50">
            <Sparkles className="w-3.5 h-3.5" />
            Top 1 Em Alta
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md text-amber-300 border border-amber-400/30 flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-300" />
            {novela.rating}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md text-slate-300">
            {novela.category}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md text-slate-300">
            {novela.totalEpisodes} Episódios
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md text-cyan-300">
            HD 1080p
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-display mb-3 drop-shadow-md">
          {novela.title}
        </h1>

        {/* Tagline */}
        <p className="text-sm sm:text-base lg:text-lg text-rose-300 font-semibold mb-3 max-w-2xl leading-snug">
          "{novela.tagline}"
        </p>

        {/* Synopsis excerpt */}
        <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 sm:line-clamp-3 mb-6 max-w-2xl leading-relaxed">
          {novela.synopsis}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-1.5 mb-8">
          {novela.tags.map(tag => (
            <span 
              key={tag}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-black/40 border border-white/10 text-slate-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Watch Now Button */}
          <button
            onClick={() => onWatch(novela, 1)}
            className="flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white rounded-2xl font-bold text-sm sm:text-base shadow-xl shadow-rose-950/60 hover:shadow-rose-900/80 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>Assistir Agora (Ep. 1)</span>
          </button>

          {/* Like Button */}
          <button
            onClick={handleLikeClick}
            className={`flex items-center gap-2 px-4 py-3.5 rounded-2xl font-semibold text-sm transition-all border cursor-pointer ${
              isLiked 
                ? 'bg-rose-500/20 border-rose-500/50 text-rose-400'
                : 'bg-white/10 hover:bg-white/15 border-white/10 text-white'
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span>{isLiked ? 'Curtido' : 'Curtir'}</span>
            <span className="text-xs opacity-75">
              ({(novela.likesCount + (isLiked ? 1 : 0)).toLocaleString('pt-BR')})
            </span>
          </button>

          {/* Add to My List */}
          <button
            onClick={() => onToggleMyList(novela.id)}
            className={`flex items-center gap-2 px-4 py-3.5 rounded-2xl font-semibold text-sm transition-all border cursor-pointer ${
              isInMyList
                ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                : 'bg-white/10 hover:bg-white/15 border-white/10 text-white'
            }`}
          >
            {isInMyList ? <Check className="w-5 h-5 text-emerald-400" /> : <Plus className="w-5 h-5" />}
            <span>{isInMyList ? 'Na Minha Lista' : 'Minha Lista'}</span>
          </button>

          {/* More details */}
          <button
            onClick={() => onOpenDetails(novela)}
            className="flex items-center gap-2 px-4 py-3.5 rounded-2xl font-semibold text-sm bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition cursor-pointer"
          >
            <Info className="w-5 h-5" />
            <span className="hidden sm:inline">Episódios & Detalhes</span>
          </button>
        </div>

      </div>
    </div>
  );
};
