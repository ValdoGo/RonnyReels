/**
 * FreeReels - Novelas & Dramas Curtos
 * Streaming web application with watch player, likes, comments, watchlist & history.
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Play, 
  Flame, 
  Bookmark, 
  History as HistoryIcon, 
  Compass, 
  Sparkles, 
  Star, 
  SlidersHorizontal,
  Heart,
  MessageSquare,
  Eye,
  CheckCircle2,
  Trash2,
  AlertCircle,
  RefreshCw,
  PlusCircle,
  Film
} from 'lucide-react';
import { Novela, Episode, Comment, WatchHistoryItem, NovelaCategory } from './types';
import { INITIAL_NOVELAS, INITIAL_COMMENTS } from './data/novelas';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { NovelaCard } from './components/NovelaCard';
import { CategoryFilter } from './components/CategoryFilter';
import { VideoPlayer } from './components/VideoPlayer';
import { NovelaDetailModal } from './components/NovelaDetailModal';
import { TikTokReelsFeed } from './components/TikTokReelsFeed';

export default function App() {
  // Novelas catalog state
  const [novelas, setNovelas] = useState<Novela[]>(() => {
    return INITIAL_NOVELAS;
  });

  // User engagement state (persistent)
  const [likedNovelas, setLikedNovelas] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('freereels_liked_novelas');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [likedEpisodes, setLikedEpisodes] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('freereels_liked_episodes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [myList, setMyList] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('freereels_my_list');
      return saved ? JSON.parse(saved) : ['retorno-bilionario', 'vinganca-herdeira'];
    } catch {
      return ['retorno-bilionario', 'vinganca-herdeira'];
    }
  });

  const [history, setHistory] = useState<WatchHistoryItem[]>(() => {
    try {
      const saved = localStorage.getItem('freereels_watch_history');
      return saved ? JSON.parse(saved) : [
        {
          novelaId: 'retorno-bilionario',
          episodeNumber: 1,
          progressSeconds: 45,
          durationSeconds: 112,
          updatedAt: Date.now() - 3600000,
        }
      ];
    } catch {
      return [];
    }
  });

  const [comments, setComments] = useState<Comment[]>(() => {
    try {
      const saved = localStorage.getItem('freereels_comments');
      return saved ? JSON.parse(saved) : INITIAL_COMMENTS;
    } catch {
      return INITIAL_COMMENTS;
    }
  });

  const [userName, setUserName] = useState<string>(() => {
    try {
      return localStorage.getItem('freereels_user_name') || 'Espectador VIP';
    } catch {
      return 'Espectador VIP';
    }
  });

  // Navigation & Filtering state
  const [activeTab, setActiveTab] = useState<'home' | 'explore' | 'trending' | 'mylist' | 'history'>('home');
  const [homeMode, setHomeMode] = useState<'reels' | 'catalog'>('reels');
  const [selectedCategory, setSelectedCategory] = useState<NovelaCategory | 'Todos'>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'likes' | 'rating' | 'newest'>('popular');

  // Pagination & Infinite Scroll state
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreDramas, setHasMoreDramas] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loadMoreSentinelRef = useRef<HTMLDivElement>(null);

  // Global search across ALL FreeReels library
  const [globalSearchResults, setGlobalSearchResults] = useState<Novela[]>([]);
  const [isSearchingGlobal, setIsSearchingGlobal] = useState(false);

  // Live server status & sync
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);
  const [isLiveConnected, setIsLiveConnected] = useState(true);

  // Search across the ENTIRE FreeReels catalog via backend search endpoint
  useEffect(() => {
    const q = searchQuery.trim();
    if (!q) {
      setGlobalSearchResults([]);
      setIsSearchingGlobal(false);
      return;
    }

    setIsSearchingGlobal(true);
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/freereels/search?q=${encodeURIComponent(q)}`);
        const json = await res.json();
        if (json && json.success && Array.isArray(json.results)) {
          setGlobalSearchResults(json.results);
          // Register found novelas in main state so player and details have full data
          setNovelas(prev => {
            const map = new Map(prev.map(p => [p.id, p]));
            json.results.forEach((d: Novela) => {
              if (!map.has(d.id)) map.set(d.id, d);
            });
            return Array.from(map.values());
          });
        }
      } catch (err) {
        console.error('Error during global FreeReels search:', err);
      } finally {
        setIsSearchingGlobal(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Load more dramas (Pagination & Infinite Scroll)
  const handleLoadMoreDramas = async () => {
    if (isLoadingMore || !hasMoreDramas) return;
    setIsLoadingMore(true);
    const nextPage = currentPage + 1;
    try {
      const res = await fetch(`/api/freereels/dramas?page=${nextPage}&limit=12`);
      const json = await res.json();
      if (json && json.success && Array.isArray(json.formattedNovelas) && json.formattedNovelas.length > 0) {
        setNovelas(prev => {
          const map = new Map(prev.map(p => [p.id, p]));
          json.formattedNovelas.forEach((d: Novela) => {
            if (!map.has(d.id)) {
              map.set(d.id, d);
            }
          });
          return Array.from(map.values());
        });
        setCurrentPage(nextPage);
        setHasMoreDramas(json.hasMore ?? (json.formattedNovelas.length === 12));
      } else {
        setHasMoreDramas(false);
      }
    } catch (err) {
      console.error('Error loading more dramas from FreeReels:', err);
    } finally {
      setIsLoadingMore(false);
    }
  };

  // IntersectionObserver for auto-loading more dramas when scrolling near bottom
  useEffect(() => {
    const sentinel = loadMoreSentinelRef.current;
    if (!sentinel || !hasMoreDramas || isLoadingMore) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        handleLoadMoreDramas();
      }
    }, { rootMargin: '300px' });

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMoreDramas, isLoadingMore, currentPage, novelas.length]);

  // Sync real data from FreeReels backend API
  const handleSyncRealData = async () => {
    setIsSyncing(true);
    setSyncMessage('Conectando ao CDN e Servidor da API FreeReels (api.mydramawave.com)...');
    try {
      // Fetch authentic dramas catalog extracted directly from FreeReels APK CDN
      const dramasRes = await fetch('/api/freereels/dramas?page=1&limit=48');
      const dramasJson = await dramasRes.json();
      
      if (dramasJson && dramasJson.success && Array.isArray(dramasJson.formattedNovelas)) {
        setIsLiveConnected(true);
        setNovelas(prev => {
          const map = new Map<string, Novela>();
          // Put the authentic/formatted dramas first (all with CORS proxy streams)
          dramasJson.formattedNovelas.forEach((d: Novela) => map.set(d.id, d));
          // Retain any existing novelas not in the batch
          prev.forEach(p => {
            if (!map.has(p.id)) map.set(p.id, p);
          });
          return Array.from(map.values());
        });
      }

      setSyncMessage('Catálogo oficial FreeReels sincronizado com sucesso (milhares de minidramas disponíveis em HLS HD)!');
      setTimeout(() => setSyncMessage(null), 4000);
    } catch {
      setSyncMessage('Catálogo FreeReels ativo.');
      setTimeout(() => setSyncMessage(null), 3000);
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    // Check backend connection on mount & trigger sync
    fetch('/api/freereels/status')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'online') {
          setIsLiveConnected(true);
          handleSyncRealData();
        }
      })
      .catch(() => {});
  }, []);

  // Active watching states
  const [watchingNovela, setWatchingNovela] = useState<Novela | null>(null);
  const [watchingEpisode, setWatchingEpisode] = useState<Episode | null>(null);
  const [modalNovela, setModalNovela] = useState<Novela | null>(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('freereels_liked_novelas', JSON.stringify(likedNovelas));
  }, [likedNovelas]);

  useEffect(() => {
    localStorage.setItem('freereels_liked_episodes', JSON.stringify(likedEpisodes));
  }, [likedEpisodes]);

  useEffect(() => {
    localStorage.setItem('freereels_my_list', JSON.stringify(myList));
  }, [myList]);

  useEffect(() => {
    localStorage.setItem('freereels_watch_history', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem('freereels_comments', JSON.stringify(comments));
  }, [comments]);

  // Like toggles
  const handleToggleLikeNovela = (novelaId: string) => {
    setLikedNovelas(prev => {
      const next = { ...prev, [novelaId]: !prev[novelaId] };
      return next;
    });
  };

  const handleToggleLikeEpisode = (novelaId: string, episodeId: string) => {
    setLikedEpisodes(prev => {
      const isCurrentlyLiked = !!prev[episodeId];
      const next = { ...prev, [episodeId]: !isCurrentlyLiked };

      // Update likes count on the episode
      setNovelas(prevNovelas => 
        prevNovelas.map(nov => {
          if (nov.id !== novelaId) return nov;
          return {
            ...nov,
            episodes: nov.episodes.map(ep => {
              if (ep.id !== episodeId) return ep;
              return {
                ...ep,
                likesCount: ep.likesCount + (isCurrentlyLiked ? -1 : 1)
              };
            })
          };
        })
      );

      return next;
    });
  };

  const handleToggleMyList = (novelaId: string) => {
    setMyList(prev => {
      if (prev.includes(novelaId)) {
        return prev.filter(id => id !== novelaId);
      } else {
        return [...prev, novelaId];
      }
    });
  };

  const [isLoadingEpisodes, setIsLoadingEpisodes] = useState(false);

  // Fetch complete 60-80 episodes list from the server
  const fetchFullEpisodesForNovela = async (targetNovela: Novela): Promise<Novela> => {
    if (targetNovela.episodes && targetNovela.episodes.length >= 50) {
      return targetNovela;
    }

    try {
      setIsLoadingEpisodes(true);
      const url = `/api/freereels/novela/${encodeURIComponent(targetNovela.id)}/episodes?title=${encodeURIComponent(targetNovela.title)}&cover=${encodeURIComponent(targetNovela.coverUrl)}&total_episodes=${targetNovela.totalEpisodes || 65}`;
      const res = await fetch(url);
      const json = await res.json();
      if (json && json.success && Array.isArray(json.episodes) && json.episodes.length > 0) {
        const updated: Novela = {
          ...targetNovela,
          totalEpisodes: json.totalEpisodes || json.episodes.length,
          episodes: json.episodes
        };
        // Update in state so all components have the full episode list
        setNovelas(prev => prev.map(n => n.id === targetNovela.id ? updated : n));
        return updated;
      }
    } catch (err) {
      console.error('Error fetching episodes from server:', err);
    } finally {
      setIsLoadingEpisodes(false);
    }
    return targetNovela;
  };

  // Watch flow: opens player immediately and loads full 60-80 episodes in background
  const handleStartWatching = (novela: Novela, episodeNumber: number = 1) => {
    const activeNovela = novela;
    const targetEp = activeNovela.episodes.find(e => e.episodeNumber === episodeNumber) || activeNovela.episodes[0];

    // Open player immediately without any delay
    setWatchingNovela(activeNovela);
    setWatchingEpisode(targetEp);
    setModalNovela(null);

    // Record in history
    setHistory(prev => {
      const filtered = prev.filter(h => h.novelaId !== activeNovela.id);
      return [
        {
          novelaId: activeNovela.id,
          episodeNumber: targetEp ? targetEp.episodeNumber : 1,
          progressSeconds: 0,
          durationSeconds: targetEp ? targetEp.durationSeconds : 120,
          updatedAt: Date.now()
        },
        ...filtered
      ];
    });

    // If episodes are not fully loaded from the server, populate all 60-80 episodes asynchronously
    if (activeNovela.episodes.length < 50) {
      fetchFullEpisodesForNovela(activeNovela).then(fullNovela => {
        setWatchingNovela(fullNovela);
        const matchingEp = fullNovela.episodes.find(e => e.episodeNumber === episodeNumber) || fullNovela.episodes[0];
        setWatchingEpisode(prev => {
          if (!prev || prev.episodeNumber === episodeNumber) return matchingEp;
          return prev;
        });
      });
    }
  };

  // Details modal flow: opens modal immediately and loads complete 60-80 episodes in background
  const handleOpenDetails = (novela: Novela) => {
    setModalNovela(novela);
    if (novela.episodes.length < 50) {
      fetchFullEpisodesForNovela(novela).then(fullNovela => {
        setModalNovela(prev => (prev && prev.id === novela.id ? fullNovela : prev));
      });
    }
  };

  const handleSaveProgress = (novelaId: string, episodeNumber: number, progress: number, duration: number) => {
    setHistory(prev => {
      const existing = prev.find(h => h.novelaId === novelaId);
      const filtered = prev.filter(h => h.novelaId !== novelaId);
      return [
        {
          novelaId,
          episodeNumber,
          progressSeconds: progress,
          durationSeconds: duration,
          updatedAt: Date.now()
        },
        ...filtered
      ];
    });
  };

  const clearHistory = () => {
    setHistory([]);
  };

  // Comments interaction
  const handleAddComment = (newCommentData: Omit<Comment, 'id' | 'createdAt' | 'likesCount' | 'isLiked'>) => {
    const newComment: Comment = {
      ...newCommentData,
      id: `c-${Date.now()}`,
      createdAt: 'agora mesmo',
      likesCount: 0,
      isLiked: false,
    };

    setComments(prev => [newComment, ...prev]);

    // increment comment count on episode
    setNovelas(prevNovelas =>
      prevNovelas.map(nov => {
        if (nov.id !== newCommentData.novelaId) return nov;
        return {
          ...nov,
          episodes: nov.episodes.map(ep => {
            if (ep.episodeNumber !== newCommentData.episodeNumber) return ep;
            return { ...ep, commentsCount: ep.commentsCount + 1 };
          })
        };
      })
    );
  };

  const handleLikeComment = (commentId: string) => {
    setComments(prev =>
      prev.map(c => {
        if (c.id !== commentId) return c;
        const nextLiked = !c.isLiked;
        return {
          ...c,
          isLiked: nextLiked,
          likesCount: c.likesCount + (nextLiked ? 1 : -1)
        };
      })
    );
  };

  const handleReplyComment = (commentId: string, replyText: string) => {
    setComments(prev =>
      prev.map(c => {
        if (c.id !== commentId) return c;
        const newReply = {
          id: `cr-${Date.now()}`,
          userName: userName || 'Espectador VIP',
          userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
          content: replyText,
          createdAt: 'agora mesmo',
          likesCount: 0,
          isLiked: false,
        };
        return {
          ...c,
          replies: [...(c.replies || []), newReply]
        };
      })
    );
  };

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { Todos: novelas.length };
    novelas.forEach(n => {
      counts[n.category] = (counts[n.category] || 0) + 1;
    });
    return counts;
  }, [novelas]);

  // Filtered & Sorted novelas
  const displayedNovelas = useMemo(() => {
    let result = [...novelas];

    // Search filter across ALL FreeReels library
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const localMatches = result.filter(n =>
        n.title.toLowerCase().includes(q) ||
        n.tags.some(t => t.toLowerCase().includes(q)) ||
        n.category.toLowerCase().includes(q) ||
        n.cast.some(c => c.toLowerCase().includes(q))
      );
      const map = new Map<string, Novela>();
      localMatches.forEach(n => map.set(n.id, n));
      globalSearchResults.forEach(n => {
        if (!map.has(n.id)) map.set(n.id, n);
      });
      result = Array.from(map.values());
    }

    // Category filter
    if (selectedCategory !== 'Todos') {
      result = result.filter(n => n.category === selectedCategory);
    }

    // Tab-specific filters
    if (activeTab === 'trending') {
      result = result.sort((a, b) => b.likesCount - a.likesCount);
    } else if (activeTab === 'mylist') {
      result = result.filter(n => myList.includes(n.id));
    } else if (activeTab === 'history') {
      const historyIds = history.map(h => h.novelaId);
      result = result
        .filter(n => historyIds.includes(n.id))
        .sort((a, b) => {
          const indexA = historyIds.indexOf(a.id);
          const indexB = historyIds.indexOf(b.id);
          return indexA - indexB;
        });
    } else {
      // General sorting
      if (sortBy === 'popular') {
        result.sort((a, b) => b.likesCount - a.likesCount);
      } else if (sortBy === 'likes') {
        result.sort((a, b) => (likedNovelas[b.id] ? 1 : 0) - (likedNovelas[a.id] ? 1 : 0));
      } else if (sortBy === 'rating') {
        result.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === 'newest') {
        result.sort((a, b) => b.releaseYear - a.releaseYear);
      }
    }

    return result;
  }, [novelas, searchQuery, globalSearchResults, selectedCategory, activeTab, sortBy, myList, history, likedNovelas]);

  // Featured Hero Novela (first trending novela)
  const heroNovela = novelas.find(n => n.isTrending) || novelas[0];

  // Top 10 Trending for home carousel
  const topTrendingNovelas = useMemo(() => {
    return [...novelas].sort((a, b) => b.likesCount - a.likesCount);
  }, [novelas]);

  return (
    <div className="min-h-screen bg-[#0c0d14] text-slate-100 flex flex-col pb-20 md:pb-12">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        myListCount={myList.length}
        likedCount={Object.values(likedNovelas).filter(Boolean).length}
        historyCount={history.length}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        novelas={novelas}
        onSelectNovela={(novela, ep) => handleStartWatching(novela, ep || 1)}
        userName={userName}
        setUserName={setUserName}
      />

      {/* Main Page Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        
        {/* Live FreeReels API Status & Sync Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 p-3 sm:px-4 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 border border-white/10 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLiveConnected ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${isLiveConnected ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs">
              <span className="font-bold text-white flex items-center gap-1.5">
                <span>FreeReels API:</span>
                <span className="text-emerald-400 font-mono text-[11px]">api.mydramawave.com</span>
              </span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="text-[11px] text-slate-300">
                Catálogo real extraído do app com reprodução vertical HD
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSyncRealData}
              disabled={isSyncing}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 active:scale-95 shadow-md shadow-rose-600/20 border border-rose-500/30 transition cursor-pointer disabled:opacity-60"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Sincronizando...' : 'Sincronizar Dados Reais'}</span>
            </button>
          </div>
        </div>

        {/* Sync feedback notification */}
        {syncMessage && (
          <div className="mb-6 p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs sm:text-sm flex items-center justify-between gap-3 animate-fade-in shadow-lg">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{syncMessage}</span>
            </div>
            <button
              onClick={() => setSyncMessage(null)}
              className="text-xs text-rose-400 hover:text-white"
            >
              ✕
            </button>
          </div>
        )}

        {/* Search Results Alert banner if searching */}
        {searchQuery.trim() && (
          <div className="mb-6 p-4 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">Resultados da busca para:</p>
              <h2 className="text-lg font-bold text-white">"{searchQuery}" ({displayedNovelas.length} novelas)</h2>
            </div>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs font-semibold text-rose-400 hover:text-rose-300 px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20"
            >
              Limpar busca
            </button>
          </div>
        )}

        {/* Home Tab Content */}
        {activeTab === 'home' && !searchQuery.trim() && (
          <div className="mb-8">
            {/* Mode Switcher: TikTok Reels (Ep. 1) vs Catálogo Geral */}
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <div className="flex items-center p-1 rounded-2xl bg-slate-900 border border-white/10 shadow-lg">
                <button
                  onClick={() => setHomeMode('reels')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    homeMode === 'reels'
                      ? 'bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Film className="w-4 h-4 text-white" />
                  <span>Feed TikTok (Ep. 1 Aleatório)</span>
                </button>

                <button
                  onClick={() => setHomeMode('catalog')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    homeMode === 'catalog'
                      ? 'bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Compass className="w-4 h-4 text-white" />
                  <span>Catálogo Geral</span>
                </button>
              </div>

              {homeMode === 'reels' ? (
                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Episódio 1 grátis de cada drama • Deslize para baixo</span>
                </div>
              ) : (
                <span className="text-xs text-slate-400">
                  {novelas.length} minidramas disponíveis
                </span>
              )}
            </div>

            {homeMode === 'reels' ? (
              <TikTokReelsFeed
                novelas={novelas}
                onOpenDetails={handleOpenDetails}
                onWatchEpisode={(n, ep) => handleStartWatching(n, ep || 1)}
                likedNovelas={likedNovelas}
                onToggleLikeNovela={handleToggleLikeNovela}
                comments={comments}
                onAddComment={handleAddComment}
                onLikeComment={handleLikeComment}
                onReplyComment={handleReplyComment}
                userName={userName}
                onSwitchToCatalog={() => setHomeMode('catalog')}
              />
            ) : (
              <>
                {/* Hero Featured Novela Banner */}
                {heroNovela && (
                  <HeroBanner
                    novela={heroNovela}
                    onWatch={(n, ep) => handleStartWatching(n, ep || 1)}
                    onOpenDetails={handleOpenDetails}
                    isLiked={!!likedNovelas[heroNovela.id]}
                    onToggleLike={handleToggleLikeNovela}
                    isInMyList={myList.includes(heroNovela.id)}
                    onToggleMyList={handleToggleMyList}
                  />
                )}

                {/* Continue Watching Section (if history exists) */}
                {history.length > 0 && (
                  <section className="mb-10 text-left">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <HistoryIcon className="w-5 h-5 text-cyan-400" />
                        <h2 className="text-xl font-bold text-white font-display">
                          Continuar Assistindo
                        </h2>
                      </div>
                      <button
                        onClick={() => setActiveTab('history')}
                        className="text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                      >
                        Ver todo histórico ({history.length})
                      </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                      {history.slice(0, 6).map(item => {
                        const nov = novelas.find(n => n.id === item.novelaId);
                        if (!nov) return null;
                        return (
                          <NovelaCard
                            key={nov.id}
                            novela={nov}
                            onWatch={(n, ep) => handleStartWatching(n, ep || item.episodeNumber)}
                            onOpenDetails={handleOpenDetails}
                            isLiked={!!likedNovelas[nov.id]}
                            onToggleLike={handleToggleLikeNovela}
                            isInMyList={myList.includes(nov.id)}
                            onToggleMyList={handleToggleMyList}
                            historyItem={item}
                          />
                        );
                      })}
                    </div>
                  </section>
                )}

                {/* Top 10 Trending Section */}
                <section className="mb-10 text-left">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Flame className="w-5 h-5 text-amber-500 fill-amber-500" />
                      <h2 className="text-xl sm:text-2xl font-black text-white font-display">
                        Top 10 Novelas Mais Populares
                      </h2>
                    </div>
                    <span className="text-xs text-slate-400 hidden sm:inline">
                      Atualizado em tempo real com base em curtidas e visualizações
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                    {topTrendingNovelas.slice(0, 6).map((nov, index) => (
                      <NovelaCard
                        key={nov.id}
                        novela={nov}
                        rank={index + 1}
                        onWatch={(n, ep) => handleStartWatching(n, ep || 1)}
                        onOpenDetails={handleOpenDetails}
                        isLiked={!!likedNovelas[nov.id]}
                        onToggleLike={handleToggleLikeNovela}
                        isInMyList={myList.includes(nov.id)}
                        onToggleMyList={handleToggleMyList}
                        historyItem={history.find(h => h.novelaId === nov.id)}
                      />
                    ))}
                  </div>
                </section>
              </>
            )}
          </div>
        )}

        {/* Category Filter and Sorting Bar (Shown in catalog mode, other tabs, or when searching) */}
        {(activeTab !== 'home' || homeMode === 'catalog' || searchQuery.trim()) && (
          <>
            <section className="mb-6 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <h2 className="text-xl sm:text-2xl font-black text-white font-display flex items-center gap-2">
                  {activeTab === 'explore' && <Compass className="w-6 h-6 text-rose-500" />}
                  {activeTab === 'trending' && <Flame className="w-6 h-6 text-amber-500 fill-amber-500" />}
                  {activeTab === 'mylist' && <Bookmark className="w-6 h-6 text-rose-500" />}
                  {activeTab === 'history' && <HistoryIcon className="w-6 h-6 text-cyan-500" />}

                  <span>
                    {activeTab === 'home' && 'Catálogo de Novelas & Dramas'}
                    {activeTab === 'explore' && 'Explorar Todas as Novelas'}
                    {activeTab === 'trending' && 'Novelas em Alta e Mais Assistidas'}
                    {activeTab === 'mylist' && `Minha Lista de Favoritos (${myList.length})`}
                    {activeTab === 'history' && `Histórico de Exibição (${history.length})`}
                  </span>
                </h2>

                {/* Clear History Button if on History Tab */}
                {activeTab === 'history' && history.length > 0 && (
                  <button
                    onClick={clearHistory}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 transition cursor-pointer self-start"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Limpar Histórico</span>
                  </button>
                )}

                {/* Sorting options dropdown */}
                {activeTab !== 'history' && activeTab !== 'mylist' && (
                  <div className="flex items-center gap-2 text-xs text-slate-400 self-end sm:self-auto">
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Ordenar:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="bg-slate-900 border border-white/10 rounded-xl px-2.5 py-1 text-slate-200 text-xs focus:outline-none focus:border-rose-500"
                    >
                      <option value="popular">Mais Populares</option>
                      <option value="likes">Minhas Curtidas</option>
                      <option value="rating">Maior Avaliação</option>
                      <option value="newest">Mais Recentes</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Categories Pill Bar */}
              <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                categoryCounts={categoryCounts}
              />
            </section>

            {/* Novelas Grid */}
            <section className="mb-12">
              {displayedNovelas.length === 0 ? (
                <div className="p-12 text-center rounded-3xl bg-slate-900/40 border border-white/5 max-w-md mx-auto my-8">
                  <AlertCircle className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-white">Nenhuma novela encontrada</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {activeTab === 'mylist' 
                      ? 'Você ainda não adicionou nenhuma novela à sua lista. Explore o catálogo e clique no botão "+" para salvar!'
                      : activeTab === 'history'
                      ? 'Você ainda não assistiu a nenhum episódio. Escolha uma novela para começar!'
                      : 'Tente alterar a categoria ou o termo de pesquisa digitado.'}
                  </p>
                  {(selectedCategory !== 'Todos' || searchQuery) && (
                    <button
                      onClick={() => { setSelectedCategory('Todos'); setSearchQuery(''); }}
                      className="mt-4 px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold transition"
                    >
                      Ver Todas as Novelas
                    </button>
                  )}
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4.5">
                    {displayedNovelas.map(nov => (
                      <NovelaCard
                        key={nov.id}
                        novela={nov}
                        onWatch={(n, ep) => handleStartWatching(n, ep || 1)}
                        onOpenDetails={handleOpenDetails}
                        isLiked={!!likedNovelas[nov.id]}
                        onToggleLike={handleToggleLikeNovela}
                        isInMyList={myList.includes(nov.id)}
                        onToggleMyList={handleToggleMyList}
                        historyItem={history.find(h => h.novelaId === nov.id)}
                      />
                    ))}
                  </div>

                  {/* Infinite Scroll & "Ver Mais Dramas" Button */}
                  {activeTab !== 'history' && activeTab !== 'mylist' && !searchQuery.trim() && (
                    <div className="mt-10 flex flex-col items-center justify-center gap-3">
                      {hasMoreDramas ? (
                        <>
                          <button
                            onClick={handleLoadMoreDramas}
                            disabled={isLoadingMore}
                            className="px-6 py-3 rounded-2xl font-black text-xs sm:text-sm bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white shadow-xl shadow-rose-950/60 flex items-center gap-2.5 transition-all transform active:scale-95 disabled:opacity-60 cursor-pointer"
                          >
                            {isLoadingMore ? (
                              <>
                                <Sparkles className="w-4 h-4 animate-spin text-white" />
                                <span>Buscando Mais Novelas do FreeReels...</span>
                              </>
                            ) : (
                              <>
                                <PlusCircle className="w-4 h-4 text-white" />
                                <span>Ver Mais Dramas (+12)</span>
                              </>
                            )}
                          </button>
                          <p className="text-[11px] text-slate-400">
                            {novelas.length} minidramas carregados de milhares no acervo oficial • Role para baixo para carregar mais
                          </p>
                          {/* Sentinel element for infinite scroll */}
                          <div ref={loadMoreSentinelRef} className="h-6 w-full pointer-events-none" />
                        </>
                      ) : (
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-slate-400 text-xs font-semibold">
                          🎉 Você explorou todo o acervo disponível de milhares de minidramas do FreeReels!
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </section>
          </>
        )}

      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/5 py-8 text-center text-xs text-slate-500 max-w-7xl mx-auto w-full px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300 font-display">FreeReels</span>
            <span>• Plataforma de Novelas Curtas e Micro-Dramas</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>HD 1080p Streaming</span>
            <span>•</span>
            <span>Comentários em Tempo Real</span>
            <span>•</span>
            <span>{novelas.length} Novelas Disponíveis</span>
          </div>
        </div>
      </footer>

      {/* Video Player Overlay (When user is watching an episode) */}
      {watchingNovela && watchingEpisode && (
        <VideoPlayer
          novela={watchingNovela}
          currentEpisode={watchingEpisode}
          onSelectEpisode={(ep) => setWatchingEpisode(ep)}
          onClose={() => {
            setWatchingNovela(null);
            setWatchingEpisode(null);
          }}
          isLiked={!!likedEpisodes[watchingEpisode.id]}
          onToggleLike={handleToggleLikeEpisode}
          onSaveProgress={handleSaveProgress}
          comments={comments}
          onAddComment={handleAddComment}
          onLikeComment={handleLikeComment}
          onReplyComment={handleReplyComment}
          userName={userName}
        />
      )}

      {/* Novela Detail Modal */}
      {modalNovela && (
        <NovelaDetailModal
          novela={modalNovela}
          onClose={() => setModalNovela(null)}
          onWatchEpisode={(nov, epNum) => handleStartWatching(nov, epNum)}
          isLiked={!!likedNovelas[modalNovela.id]}
          onToggleLike={handleToggleLikeNovela}
          isInMyList={myList.includes(modalNovela.id)}
          onToggleMyList={handleToggleMyList}
          historyItem={history.find(h => h.novelaId === modalNovela.id)}
          comments={comments}
          onAddComment={handleAddComment}
          onLikeComment={handleLikeComment}
          onReplyComment={handleReplyComment}
          userName={userName}
        />
      )}

      {/* Floating Episodes Loading Indicator */}
      {isLoadingEpisodes && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-900/95 border border-rose-500/40 text-white shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-4 duration-200">
          <Sparkles className="w-4 h-4 text-rose-400 animate-spin" />
          <div className="text-xs">
            <span className="font-bold text-rose-300">Carregando episódios</span>
            <span className="text-slate-400 ml-1">do servidor FreeReels...</span>
          </div>
        </div>
      )}

    </div>
  );
}
