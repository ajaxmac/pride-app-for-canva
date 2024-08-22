import type { ImageMimeType } from '@canva/asset';
import type { GifsResult } from '@giphy/js-fetch-api';

export type FlagType = {
  name: string;
  yearCreated: string;
  slug: string;
  mimeType: ImageMimeType;
  url: string;
  thumbnailUrl: string;
};

export type SectionType = 'flags' | 'gifs';

export type PrideContextType = {
  flags: FlagType[];
  search: string;
  searchResults: FlagType[];
  visibleSearchResults: boolean;
  visibleSections: SectionType[];
  gifs: GifsResult;
};

export type ActionType = {
  type: string;
  payload: FlagType[] | string | FlagType[] | boolean | SectionType | GifsResult;
};