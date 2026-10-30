import React, { useState } from 'react';
import { 
  Heart, 
  Send, 
  MessageSquare, 
  X, 
  Sparkles, 
  ThumbsUp, 
  CornerDownRight, 
  Smile, 
  Filter
} from 'lucide-react';
import { Comment, Novela, Episode } from '../types';
import { soundManager } from '../utils/audio';

interface CommentsSectionProps {
  novela: Novela;
  currentEpisode: Episode;
  comments: Comment[];
  onAddComment: (newComment: Omit<Comment, 'id' | 'createdAt' | 'likesCount' | 'isLiked'>) => void;
  onLikeComment: (commentId: string) => void;
  onReplyComment: (commentId: string, replyText: string) => void;
  userName: string;
  onClose?: () => void;
  isDrawer?: boolean;
}

const EMOJI_SHORTCUTS = ['🔥 Incrível', '😱 Chocado', '❤️ Amei', '👏 Perfeito', '🍿 Viciante', '😭 Emocionante', '👑 O Melhor'];

export const CommentsSection: React.FC<CommentsSectionProps> = ({
  novela,
  currentEpisode,
  comments,
  onAddComment,
  onLikeComment,
  onReplyComment,
  userName,
  onClose,
  isDrawer = false,
}) => {
  const [commentText, setCommentText] = useState('');
  const [activeTab, setActiveTab] = useState<'episode' | 'all'>('episode');
  const [sortBy, setSortBy] = useState<'recent' | 'top'>('recent');
  const [replyingToId, setReplyingToId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  // Filter comments for current episode or all episodes of this novela
  const filteredComments = comments
    .filter(c => c.novelaId === novela.id && (activeTab === 'all' || c.episodeNumber === currentEpisode.episodeNumber))
    .sort((a, b) => {
      if (sortBy === 'top') {
        return b.likesCount - a.likesCount;
      }
      return 0; // maintain recent order
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    soundManager.playLikeSound();
    onAddComment({
      novelaId: novela.id,
      episodeNumber: currentEpisode.episodeNumber,
      userName: userName || 'Espectador VIP',
      userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      badge: 'VIP',
      content: commentText.trim(),
    });

    setCommentText('');
  };

  const handleReplySubmit = (commentId: string) => {
    if (!replyText.trim()) return;
    onReplyComment(commentId, replyText.trim());
    setReplyText('');
    setReplyingToId(null);
  };

  const addEmojiToText = (emojiText: string) => {
    setCommentText(prev => prev ? `${prev} ${emojiText}` : emojiText);
  };

  return (
    <div className={`flex flex-col h-full bg-slate-900/95 border-white/10 ${isDrawer ? 'p-4 sm:p-5' : 'p-4 rounded-2xl border'}`}>
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-rose-500" />
          <h3 className="font-bold text-white text-base">
            Comentários
          </h3>
          <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-400">
            {filteredComments.length}
          </span>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Tabs: Episode vs All and Sorting */}
      <div className="flex flex-wrap items-center justify-between gap-2 py-3 border-b border-white/5 text-xs">
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/5">
          <button
            onClick={() => setActiveTab('episode')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition ${
              activeTab === 'episode'
                ? 'bg-rose-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Ep. {currentEpisode.episodeNumber}
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition ${
              activeTab === 'all'
                ? 'bg-rose-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Toda a Novela
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-slate-400">
          <Filter className="w-3.5 h-3.5" />
          <button
            onClick={() => setSortBy(sortBy === 'recent' ? 'top' : 'recent')}
            className="hover:text-white underline decoration-rose-500/50 underline-offset-2 font-medium"
          >
            {sortBy === 'recent' ? 'Mais Recentes' : 'Mais Curtidos'}
          </button>
        </div>
      </div>

      {/* Comment Input Box */}
      <form onSubmit={handleSubmit} className="py-3 border-b border-white/10">
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow">
            {userName ? userName[0].toUpperCase() : 'U'}
          </div>

          <div className="flex-1 relative">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder={`Comentar sobre o Ep. ${currentEpisode.episodeNumber}...`}
              rows={2}
              maxLength={280}
              className="w-full px-3 py-2 bg-black/50 border border-white/10 focus:border-rose-500 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none resize-none transition"
            />
            
            <div className="flex items-center justify-between mt-1 text-[11px] text-slate-500">
              <span>{commentText.length}/280</span>
              <button
                type="submit"
                disabled={!commentText.trim()}
                className="flex items-center gap-1.5 px-3 py-1 bg-rose-600 hover:bg-rose-500 disabled:opacity-40 disabled:hover:bg-rose-600 text-white rounded-lg font-bold text-xs transition cursor-pointer"
              >
                <Send className="w-3 h-3" />
                <span>Publicar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Emoji Reaction Buttons */}
        <div className="flex items-center gap-1.5 mt-2 overflow-x-auto no-scrollbar py-0.5">
          {EMOJI_SHORTCUTS.map(item => (
            <button
              key={item}
              type="button"
              onClick={() => addEmojiToText(item)}
              className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5 shrink-0 transition"
            >
              {item}
            </button>
          ))}
        </div>
      </form>

      {/* Comments List */}
      <div className="flex-1 overflow-y-auto py-3 space-y-4 pr-1">
        {filteredComments.length === 0 ? (
          <div className="text-center py-10">
            <MessageSquare className="w-10 h-10 text-slate-600 mx-auto mb-2 opacity-50" />
            <p className="text-sm font-semibold text-slate-400">Seja o primeiro a comentar!</p>
            <p className="text-xs text-slate-500 mt-1">Diga o que achou dessa cena bombástica.</p>
          </div>
        ) : (
          filteredComments.map(comment => (
            <div key={comment.id} className="space-y-2 text-left group">
              <div className="flex gap-3">
                <img
                  src={comment.userAvatar}
                  alt={comment.userName}
                  className="w-8 h-8 rounded-full object-cover shrink-0 ring-1 ring-white/10 shadow"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-bold text-xs text-slate-200">
                      {comment.userName}
                    </span>
                    {comment.badge && (
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-black uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {comment.badge}
                      </span>
                    )}
                    <span className="text-[10px] text-slate-500">
                      • {comment.createdAt}
                    </span>
                    {activeTab === 'all' && (
                      <span className="text-[10px] text-rose-400 font-semibold bg-rose-950/40 px-1 rounded">
                        Ep. {comment.episodeNumber}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed break-words">
                    {comment.content}
                  </p>

                  {/* Actions: Like & Reply */}
                  <div className="flex items-center gap-4 mt-2 text-xs">
                    <button
                      onClick={() => onLikeComment(comment.id)}
                      className={`flex items-center gap-1.5 transition cursor-pointer ${
                        comment.isLiked ? 'text-rose-400 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 ${comment.isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                      <span>{comment.likesCount}</span>
                    </button>

                    <button
                      onClick={() => setReplyingToId(replyingToId === comment.id ? null : comment.id)}
                      className="text-slate-400 hover:text-rose-400 flex items-center gap-1 font-medium transition cursor-pointer"
                    >
                      <CornerDownRight className="w-3.5 h-3.5" />
                      <span>Responder</span>
                    </button>
                  </div>

                  {/* Inline Reply Form */}
                  {replyingToId === comment.id && (
                    <div className="mt-2.5 flex gap-2">
                      <input
                        type="text"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder={`Responder a ${comment.userName}...`}
                        className="flex-1 px-3 py-1.5 bg-black/60 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-rose-500"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleReplySubmit(comment.id);
                        }}
                      />
                      <button
                        onClick={() => handleReplySubmit(comment.id)}
                        disabled={!replyText.trim()}
                        className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 disabled:opacity-40 text-white rounded-lg text-xs font-bold transition"
                      >
                        Enviar
                      </button>
                    </div>
                  )}

                  {/* Nested Replies */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div className="mt-3 pl-3 border-l-2 border-white/10 space-y-2.5">
                      {comment.replies.map(reply => (
                        <div key={reply.id} className="flex gap-2.5">
                          <img
                            src={reply.userAvatar}
                            alt={reply.userName}
                            className="w-6 h-6 rounded-full object-cover shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className="font-bold text-[11px] text-slate-300">
                                {reply.userName}
                              </span>
                              <span className="text-[10px] text-slate-500">
                                • {reply.createdAt}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 leading-snug">
                              {reply.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
