import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Search, 
  Bookmark, 
  Flame, 
  Compass, 
  History, 
  Volume2, 
  VolumeX, 
  X,
  Sparkles,
  User,
  Heart
} from 'lucide-react';
import { Novela } from '../types';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  activeTab: 'home' | 'explore' | 'trending' | 'mylist' | 'history';
  setActiveTab: (tab: 'home' | 'explore' | 'trending' | 'mylist' | 'history') => void;
  myListCount: number;
  likedCount: number;
  historyCount: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  novelas: Novela[];
  onSelectNovela: (novela: Novela, episodeNumber?: number) => void;
  userName: string;
  setUserName: (name: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  myListCount,
  likedCount,
  historyCount,
  searchQuery,
  setSearchQuery,
  novelas,
  onSelectNovela,
  userName,
  setUserName,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(soundManager.isSoundEnabled());
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [tempName, setTempName] = useState(userName);

  const toggleSound = () => {
    const next = !isSoundOn;
    setIsSoundOn(next);
    soundManager.setSoundEnabled(next);
  };

  const [remoteResults, setRemoteResults] = useState<Novela[]>([]);
  const [isSearchingRemote, setIsSearchingRemote] = useState(false);

  // Search across the ENTIRE FreeReels catalog via backend search endpoint
  useEffect(() => {
    const q = searchQuery.trim();
    if (!q) {
      setRemoteResults([]);
      setIsSearchingRemote(false);
      return;
    }

    setIsSearchingRemote(true);
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/freereels/search?q=${encodeURIComponent(q)}`);
        const json = await res.json();
        if (json && json.success && Array.isArray(json.results)) {
          setRemoteResults(json.results);
        }
      } catch (err) {
        console.error('Remote search error:', err);
      } finally {
        setIsSearchingRemote(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Combine local and full FreeReels remote results without duplicates
  const allSearchResults = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    const map = new Map<string, Novela>();
    
    // Local matches
    novelas.forEach(n => {
      const q = searchQuery.toLowerCase();
      if (
        n.title.toLowerCase().includes(q) ||
        n.tags.some(t => t.toLowerCase().includes(q)) ||
        n.category.toLowerCase().includes(q) ||
        n.cast.some(c => c.toLowerCase().includes(q))
      ) {
        map.set(n.id, n);
      }
    });

    // Remote full-catalog matches from FreeReels
    remoteResults.forEach(n => {
      if (!map.has(n.id)) {
        map.set(n.id, n);
      }
    });

    return Array.from(map.values());
  }, [novelas, remoteResults, searchQuery]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0c0d14]/85 border-b border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => { setActiveTab('home'); setSearchQuery(''); }}
              className="flex items-center gap-2.5 group text-left cursor-pointer transition-transform active:scale-95"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-rose-950/40 ring-1 ring-white/10 group-hover:ring-rose-500/50 transition-all flex items-center justify-center bg-gradient-to-br from-rose-600 via-pink-600 to-amber-600">
                <img 
                  src="/logo.png" 
                  alt="FreeReels" 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    // Fallback to stylized icon if logo image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <Play className="w-5 h-5 text-white fill-white absolute" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-rose-300 bg-clip-text text-transparent font-display">
                  FreeReels
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-rose-400 uppercase -mt-1 flex items-center gap-1">
                  Novelas VIP <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
              <button
                onClick={() => { setActiveTab('home'); setSearchQuery(''); }}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeTab === 'home' && !searchQuery
                    ? 'bg-white/10 text-white font-semibold shadow-inner'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Início
              </button>

              <button
                onClick={() => { setActiveTab('explore'); setSearchQuery(''); }}
                className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'explore'
                    ? 'bg-white/10 text-white font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Compass className="w-4 h-4 text-rose-400" />
                Explorar
              </button>

              <button
                onClick={() => { setActiveTab('trending'); setSearchQuery(''); }}
                className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'trending'
                    ? 'bg-white/10 text-white font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Flame className="w-4 h-4 text-amber-400" />
                Em Alta
              </button>

              <button
                onClick={() => { setActiveTab('mylist'); setSearchQuery(''); }}
                className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'mylist'
                    ? 'bg-white/10 text-white font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Bookmark className="w-4 h-4 text-rose-400" />
                Minha Lista
                {myListCount > 0 && (
                  <span className="ml-0.5 px-1.5 py-0.2 bg-rose-500/20 text-rose-400 text-xs rounded-full font-bold">
                    {myListCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => { setActiveTab('history'); setSearchQuery(''); }}
                className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'history'
                    ? 'bg-white/10 text-white font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <History className="w-4 h-4 text-cyan-400" />
                Histórico
                {historyCount > 0 && (
                  <span className="ml-0.5 px-1.5 py-0.2 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-bold">
                    {historyCount}
                  </span>
                )}
              </button>
            </nav>
          </div>

          {/* Search, Sound & Profile Controls */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="relative">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Buscar novelas, atores, tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchOpen(true)}
                  className="w-36 sm:w-64 pl-9 pr-8 py-1.5 bg-white/5 hover:bg-white/10 focus:bg-slate-900 border border-white/10 focus:border-rose-500/60 rounded-full text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 p-0.5 text-slate-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Instant Search Dropdown Results */}
              {isSearchOpen && searchQuery.trim() && (
                <div 
                  className="absolute right-0 mt-2 w-80 sm:w-96 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2 z-50 max-h-96 overflow-y-auto"
                >
                  <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between border-b border-white/5 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span>Resultados ({allSearchResults.length})</span>
                      {isSearchingRemote && (
                        <span className="flex items-center gap-1 text-[10px] text-rose-400 font-normal">
                          <Sparkles className="w-3 h-3 animate-spin" />
                          em todo FreeReels...
                        </span>
                      )}
                    </div>
                    <button 
                      onClick={() => setIsSearchOpen(false)}
                      className="text-slate-500 hover:text-white text-xs"
                    >
                      Fechar
                    </button>
                  </div>

                  {allSearchResults.length === 0 ? (
                    <div className="p-6 text-center text-sm text-slate-400">
                      {isSearchingRemote ? 'Pesquisando em todo o acervo FreeReels...' : `Nenhuma novela encontrada para "${searchQuery}".`}
                    </div>
                  ) : (
                    <div className="space-y-1 mt-1">
                      {allSearchResults.map(novela => (
                        <button
                          key={novela.id}
                          onClick={() => {
                            onSelectNovela(novela);
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-white/10 transition text-left cursor-pointer"
                        >
                          <img
                            src={novela.coverUrl}
                            alt={novela.title}
                            className="w-11 h-14 object-cover rounded-lg shrink-0 shadow-md"
                          />
                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm font-bold text-white truncate">{novela.title}</h4>
                            <p className="text-xs text-rose-400 font-medium">{novela.category}</p>
                            <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                              <span>{novela.totalEpisodes} Eps</span>
                              <span>•</span>
                              <span>★ {novela.rating}</span>
                              <span>•</span>
                              <span>{novela.views} visualizações</span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              title={isSoundOn ? "Efeitos sonoros ativados" : "Efeitos sonoros desativados"}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
            >
              {isSoundOn ? (
                <Volume2 className="w-5 h-5 text-rose-400" />
              ) : (
                <VolumeX className="w-5 h-5 text-slate-500" />
              )}
            </button>

            {/* User Profile Pill */}
            <button
              onClick={() => setIsProfileModalOpen(true)}
              className="flex items-center gap-2 pl-2 pr-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition cursor-pointer text-left"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-xs font-bold text-white shadow-inner">
                {userName.slice(0, 1).toUpperCase()}
              </div>
              <span className="text-xs font-semibold text-slate-200 hidden sm:inline truncate max-w-[90px]">
                {userName}
              </span>
              <span className="px-1.5 py-0.5 text-[9px] font-extrabold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-md">
                VIP
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c0d14]/95 backdrop-blur-xl border-t border-white/10 px-4 py-2 flex items-center justify-around">
        <button
          onClick={() => { setActiveTab('home'); setSearchQuery(''); }}
          className={`flex flex-col items-center gap-1 py-1 transition ${
            activeTab === 'home' ? 'text-rose-400 font-bold' : 'text-slate-400'
          }`}
        >
          <Play className="w-5 h-5" />
          <span className="text-[10px]">Início</span>
        </button>

        <button
          onClick={() => { setActiveTab('explore'); setSearchQuery(''); }}
          className={`flex flex-col items-center gap-1 py-1 transition ${
            activeTab === 'explore' ? 'text-rose-400 font-bold' : 'text-slate-400'
          }`}
        >
          <Compass className="w-5 h-5" />
          <span className="text-[10px]">Explorar</span>
        </button>

        <button
          onClick={() => { setActiveTab('trending'); setSearchQuery(''); }}
          className={`flex flex-col items-center gap-1 py-1 transition ${
            activeTab === 'trending' ? 'text-rose-400 font-bold' : 'text-slate-400'
          }`}
        >
          <Flame className="w-5 h-5" />
          <span className="text-[10px]">Em Alta</span>
        </button>

        <button
          onClick={() => { setActiveTab('mylist'); setSearchQuery(''); }}
          className={`flex flex-col items-center gap-1 py-1 relative transition ${
            activeTab === 'mylist' ? 'text-rose-400 font-bold' : 'text-slate-400'
          }`}
        >
          <Bookmark className="w-5 h-5" />
          <span className="text-[10px]">Minha Lista</span>
          {myListCount > 0 && (
            <span className="absolute top-0 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
          )}
        </button>

        <button
          onClick={() => { setActiveTab('history'); setSearchQuery(''); }}
          className={`flex flex-col items-center gap-1 py-1 relative transition ${
            activeTab === 'history' ? 'text-rose-400 font-bold' : 'text-slate-400'
          }`}
        >
          <History className="w-5 h-5" />
          <span className="text-[10px]">Histórico</span>
        </button>
      </div>

      {/* Profile / Preferences Modal */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-white/10 rounded-2xl max-w-sm w-full p-6 shadow-2xl relative text-left">
            <button
              onClick={() => setIsProfileModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-lg font-black text-white shadow-lg">
                {tempName.slice(0, 1).toUpperCase()}
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Perfil de Espectador</h3>
                <p className="text-xs text-rose-400 font-medium">Conta Gratuita VIP Ativa</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Seu Nome ou Apelido nos Comentários
                </label>
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  maxLength={24}
                  className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-rose-500 transition"
                  placeholder="Ex: Maria Novelas"
                />
              </div>

              {/* Stats overview */}
              <div className="grid grid-cols-3 gap-2 py-2 text-center bg-white/5 rounded-xl border border-white/5">
                <div className="p-2">
                  <div className="text-lg font-bold text-rose-400">{likedCount}</div>
                  <div className="text-[10px] text-slate-400 font-medium">Curtidas</div>
                </div>
                <div className="p-2 border-x border-white/5">
                  <div className="text-lg font-bold text-amber-400">{myListCount}</div>
                  <div className="text-[10px] text-slate-400 font-medium">Salvas</div>
                </div>
                <div className="p-2">
                  <div className="text-lg font-bold text-cyan-400">{historyCount}</div>
                  <div className="text-[10px] text-slate-400 font-medium">Assistidas</div>
                </div>
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  onClick={() => {
                    if (tempName.trim()) {
                      setUserName(tempName.trim());
                      localStorage.setItem('freereels_user_name', tempName.trim());
                    }
                    setIsProfileModalOpen(false);
                  }}
                  className="w-full py-2.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-rose-950/50 transition cursor-pointer"
                >
                  Salvar Alterações
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
