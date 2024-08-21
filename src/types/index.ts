import type { ImageMimeType } from '@canva/asset';

export type FlagType = {
  name: string;
  yearCreated?: string;
  slug: string;
  mimeType: ImageMimeType;
  url: string;
  thumbnailUrl: string;
};
