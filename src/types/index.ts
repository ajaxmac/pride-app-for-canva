import type { ImageMimeType } from '@canva/asset';

export type FlagType = {
  name: string;
  yearCreated: string;
  slug: string;
  mimeType: ImageMimeType;
  url: string;
  thumbnailUrl: string;
};

export type GifType = {
  name: string;
  yearCreated: string;
  slug: string;
  mimeType: "video" | "gif" | "text";
  url: string;
  thumbnailUrl: string;
};

export type SectionType = 'flags' | 'gifs';

export type PrideContextType = {
  flags: FlagType[];
  searchFlagsTerm: string;
  searchGifsTerm: string;
  searchResults: FlagType[];
  visibleSections: SectionType[];
  gifs: GifType[];
};

export type ActionType = {
  type: string;
  payload?: FlagType[] | string | FlagType[] | boolean | SectionType | GifType[];
};