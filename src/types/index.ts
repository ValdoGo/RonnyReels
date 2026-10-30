export interface Episode {
  id: string;
  episodeNumber: number;
  title: string;
  duration: string;
  durationSeconds: number;
  videoUrl: string;
  thumbnailUrl: string;
  likesCount: number;
  commentsCount: number;
  synopsisSnippet: string;
  subtitleUrl?: string;
  subtitles?: {
    language: string;
    display_name: string;
    subtitle: string;
  }[];
}

export type NovelaCategory = 
  | 'Todos'
  | 'Bilionários & Romance'
  | 'Vingança & Reviravolta'
  | 'Casamento por Contrato'
  | 'Alfas & Fantasia'
  | 'Família & Herança'
  | 'Ação & Suspense';

export interface Novela {
  id: string;
  title: string;
  originalTitle?: string;
  tagline: string;
  synopsis: string;
  category: Exclude<NovelaCategory, 'Todos'>;
  tags: string[];
  coverUrl: string;
  bannerUrl: string;
  totalEpisodes: number;
  views: string;
  rating: number;
  likesCount: number;
  releaseYear: number;
  isTrending?: boolean;
  isHot?: boolean;
  isNew?: boolean;
  cast: string[];
  episodes: Episode[];
}

export interface CommentReply {
  id: string;
  userName: string;
  userAvatar: string;
  badge?: string;
  content: string;
  createdAt: string;
  likesCount: number;
  isLiked?: boolean;
}

export interface Comment {
  id: string;
  novelaId: string;
  episodeNumber: number;
  userName: string;
  userAvatar: string;
  badge?: string;
  content: string;
  createdAt: string;
  likesCount: number;
  isLiked?: boolean;
  replies?: CommentReply[];
}

export interface WatchHistoryItem {
  novelaId: string;
  episodeNumber: number;
  progressSeconds: number;
  durationSeconds: number;
  updatedAt: number;
}
