import type { ImageMimeType } from "@canva/asset";

export type FlagType = {
  name: string;
  yearCreated: string;
  slug: string;
  mimeType: ImageMimeType;
  url: string;
  thumbnailUrl: string;
};

export type GifMediaFormatType = {
  url: string;
  duration: number;
  preview: string;
  dims: [number, number];
  size: number;
};

export type TenorGifType = {
  id: string;
  title: string;
  media_formats: {
    webppreview_transparent?: GifMediaFormatType;
    mediumgif?: GifMediaFormatType;
    nanomp4?: GifMediaFormatType;
    nanowebm?: GifMediaFormatType;
    nanowebppreview_transparent?: GifMediaFormatType;
    tinygifpreview?: GifMediaFormatType;
    tinygif?: GifMediaFormatType;
    tinymp4?: GifMediaFormatType;
    nanogifpreview?: GifMediaFormatType;
    gifpreview?: GifMediaFormatType;
    nanowebp_transparent?: GifMediaFormatType;
    loopedmp4?: GifMediaFormatType;
    gif: GifMediaFormatType;
    webp_transparent?: GifMediaFormatType;
    nanogif?: GifMediaFormatType;
    webm?: GifMediaFormatType;
    tinywebp_transparent?: GifMediaFormatType;
    tinywebppreview_transparent?: GifMediaFormatType;
  };
  created: number;
  content_description: string;
  type: "video" | "gif" | "text";
  itemurl: string;
  url: string;
  tags: string[];
  flags: string[];
  hasaudio: boolean;
  content_description_source: string;
};

export type GifType = {
  name: string;
  yearCreated: string;
  slug: string;
  mimeType: "video" | "gif" | "text";
  url: string;
  thumbnailUrl: string;
};

export type SectionType = "flags" | "gifs";

export type PrideContextType = {
  flags: FlagType[];
  searchFlagsTerm: string;
  searchGifsTerm: string;
  isSearchingGifs: boolean;
  searchResults: FlagType[];
  visibleSections: SectionType[];
  gifs: GifType[];
  nextGif: string;
};

export type ActionType = {
  type: string;
  payload?:
    | FlagType[]
    | string
    | FlagType[]
    | boolean
    | SectionType
    | { gifs: GifType[]; next: string; loadMore?: boolean };
};
