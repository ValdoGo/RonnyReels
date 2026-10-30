import React from 'react';
import { NovelaCategory } from '../types';
import { 
  Sparkles, 
  Flame, 
  Crown, 
  ShieldAlert, 
  Heart, 
  Moon, 
  Users, 
  Crosshair 
} from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: NovelaCategory;
  onSelectCategory: (cat: NovelaCategory) => void;
  categoryCounts: Record<string, number>;
}

const CATEGORIES: { label: NovelaCategory; icon: React.ReactNode }[] = [
  { label: 'Todos', icon: <Sparkles className="w-3.5 h-3.5" /> },
  { label: 'Bilionários & Romance', icon: <Crown className="w-3.5 h-3.5 text-amber-400" /> },
  { label: 'Vingança & Reviravolta', icon: <ShieldAlert className="w-3.5 h-3.5 text-rose-400" /> },
  { label: 'Casamento por Contrato', icon: <Heart className="w-3.5 h-3.5 text-pink-400" /> },
  { label: 'Alfas & Fantasia', icon: <Moon className="w-3.5 h-3.5 text-purple-400" /> },
  { label: 'Família & Herança', icon: <Users className="w-3.5 h-3.5 text-blue-400" /> },
  { label: 'Ação & Suspense', icon: <Crosshair className="w-3.5 h-3.5 text-emerald-400" /> },
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 mb-6">
      {CATEGORIES.map(({ label, icon }) => {
        const isSelected = selectedCategory === label;
        const count = categoryCounts[label] || 0;
        return (
          <button
            key={label}
            onClick={() => onSelectCategory(label)}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 border ${
              isSelected
                ? 'bg-rose-600 border-rose-500 text-white shadow-lg shadow-rose-950/50 scale-102'
                : 'bg-white/5 hover:bg-white/10 border-white/5 text-slate-300 hover:text-white'
            }`}
          >
            {icon}
            <span>{label}</span>
            {count > 0 && (
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                isSelected ? 'bg-black/30 text-white' : 'bg-white/10 text-slate-400'
              }`}>
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
