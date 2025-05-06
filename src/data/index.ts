import type { FlagType, SectionType } from "../types";
export const TENOR_API_KEY = "AIzaSyCKJ7OV30Cg40LlsYcwnoalf8ZsZlhlcvU";
export const TENOR_SEARCH_API = "https://tenor.googleapis.com/v2/search?";
export const SECTION_FLAG: SectionType = "flags";
export const SECTION_GIF: SectionType = "gifs";
export const LGBT = "LGBT";
export const FETCH_OPTIONS: RequestInit = {
  method: "GET",
  mode: "cors",
  cache: "default",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  redirect: "error",
  referrerPolicy: "strict-origin-when-cross-origin",
};

export const FLAGS: FlagType[] = [
  {
    name: "OG Pride",
    slug: "og-pride-flag",
    mimeType: "image/svg+xml",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Gay_Pride_Flag.svg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/320px-Gay_Pride_Flag.svg.png",
    yearCreated: "1978",
  },
  {
    name: "Progress",
    slug: "progress-pride-flag",
    mimeType: "image/svg+xml",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/LGBTQ%2B_rainbow_flag_Quasar_%22Progress%22_variant.svg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/LGBTQ%2B_rainbow_flag_Quasar_%22Progress%22_variant.svg/320px-LGBTQ%2B_rainbow_flag_Quasar_%22Progress%22_variant.svg.png",
    yearCreated: "2018",
  },
  {
    name: "Intersex Inclusive",
    slug: "intersex-inclusive-pride-flag",
    mimeType: "image/svg+xml",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/60/Intersex-inclusive_pride_flag.svg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Intersex-inclusive_pride_flag.svg/320px-Intersex-inclusive_pride_flag.svg.png",
    yearCreated: "2021",
  },
  {
    name: "Aromantic",
    slug: "aromantic-pride-flag",
    mimeType: "image/svg+xml",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Aromantic_Pride_Flag.svg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Aromantic_Pride_Flag.svg/512px-Aromantic_Pride_Flag.svg.png",
    yearCreated: "2014",
  },
  {
    name: "Asexual",
    slug: "asexual-pride-flag",
    mimeType: "image/svg+xml",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Asexual_Pride_Flag.svg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Asexual_Pride_Flag.svg/320px-Asexual_Pride_Flag.svg.png",
    yearCreated: "2010",
  },
  {
    name: "Bisexual",
    slug: "bisexual-pride-flag",
    mimeType: "image/svg+xml",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Bisexual_Pride_Flag.svg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Bisexual_Pride_Flag.svg/320px-Bisexual_Pride_Flag.svg.png",
    yearCreated: "1998",
  },
  {
    name: "Lesbian",
    slug: "lesbian-pride-flag",
    mimeType: "image/svg+xml",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Lesbian_Pride_pink_flag.svg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Lesbian_Pride_pink_flag.svg/320px-Lesbian_Pride_pink_flag.svg.png",
    yearCreated: "2018",
  },
  {
    name: "Nonbinary",
    slug: "nonbinary-pride-flag",
    mimeType: "image/svg+xml",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Nonbinary_flag.svg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Nonbinary_flag.svg/320px-Nonbinary_flag.svg.png",
    yearCreated: "2014",
  },
  {
    name: "Pansexual",
    slug: "pansexual-pride-flag",
    mimeType: "image/svg+xml",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Pansexuality_Pride_Flag.svg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Pansexuality_Pride_Flag.svg/320px-Pansexuality_Pride_Flag.svg.png",
    yearCreated: "2010",
  },
  {
    name: "Transgender",
    slug: "transgender-pride-flag",
    mimeType: "image/svg+xml",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Transgender_Pride_flag.svg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Transgender_Pride_flag.svg/320px-Transgender_Pride_flag.svg.png",
    yearCreated: "1999",
  },
  {
    name: "Intersex",
    slug: "intersex-pride-flag",
    mimeType: "image/svg+xml",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/38/Intersex_Pride_Flag.svg",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Intersex_Pride_Flag.svg/320px-Intersex_Pride_Flag.svg.png",
    yearCreated: "2013",
  },
];
