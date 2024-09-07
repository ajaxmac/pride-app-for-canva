/* eslint-disable no-console */
import type {
  ActionType,
  FlagType,
  PrideContextType,
  SectionType,
  GifType,
} from "../types";
import { FLAGS, SECTION_FLAG, SECTION_GIF } from "../data";
import {
  INIT_PRIDE,
  SEARCH_FLAGS,
  SET_SEARCH_RESULTS,
  SET_VISIBLE_SECTIONS,
  SET_GIFS,
  SORT_FLAGS,
  TOGGLE_FLAG_SECTION,
  TOGGLE_GIF_SECTION,
  SEARCH_GIFS,
  SEARCH_GIFS_RESULT,
  SEARCH_GIFS_LOADING,
} from "./actions";

export function prideReducer(
  prideContext: PrideContextType,
  action: ActionType
): PrideContextType {
  const { flags, visibleSections } = prideContext;

  switch (action.type) {
    case INIT_PRIDE:
      return {
        ...prideContext,
        flags: [...FLAGS],
      };
    case SEARCH_FLAGS: {
      const search = action.payload as string;
      const searchResults = FLAGS.filter((flag) =>
        flag.name.toLowerCase().includes(search.toLowerCase())
      );
      return {
        ...prideContext,
        searchFlagsTerm: search,
        flags: searchResults,
      };
    }
    case SEARCH_GIFS: {
      const term = action.payload as string;
      return {
        ...prideContext,
        searchGifsTerm: term,
      };
    }
    case SET_SEARCH_RESULTS:
      return {
        ...prideContext,
        searchResults: action.payload as FlagType[],
      };

    case SET_VISIBLE_SECTIONS:
      return {
        ...prideContext,
        visibleSections: action.payload as unknown as SectionType[],
      };
    case SET_GIFS:
      return {
        ...prideContext,
        searchGifsTerm: action.payload as string,
      };
    case SEARCH_GIFS_LOADING: {
      const isSearchingGifs = action.payload as boolean;
      return {
        ...prideContext,
        isSearchingGifs,
      };
    }
    case SEARCH_GIFS_RESULT: {
      const { gifs, next, loadMore } = action.payload as {
        gifs: GifType[];
        next: string;
        loadMore?: boolean;
      };
      const newGifs = loadMore ? [...prideContext.gifs, ...gifs] : gifs;

      return {
        ...prideContext,
        gifs: newGifs,
        nextGif: next,
        isSearchingGifs: false,
      };
    }
    case SORT_FLAGS: {
      const value = action.payload as string;
      let newFlags = [...flags];

      switch (value) {
        case "default":
          newFlags = [...FLAGS];
          break;
        case "alphaAsc":
          newFlags = newFlags.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "alphaDesc":
          newFlags = newFlags.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "dateAsc":
          newFlags = newFlags.sort(
            (a, b) => parseInt(a.yearCreated, 10) - parseInt(b.yearCreated, 10)
          );
          break;
        case "dateDesc":
          newFlags = newFlags.sort(
            (a, b) => parseInt(b.yearCreated, 10) - parseInt(a.yearCreated, 10)
          );
          break;
        default:
          break;
      }

      return {
        ...prideContext,
        flags: newFlags,
      };
    }

    case TOGGLE_FLAG_SECTION: {
      let newSections: SectionType[] = [];

      if (!visibleSections) {
        return {
          ...prideContext,
          visibleSections: [SECTION_FLAG],
        };
      }

      if (visibleSections.includes(SECTION_FLAG)) {
        newSections = visibleSections.filter(
          (section) => section !== SECTION_FLAG
        );
      } else {
        newSections = [...visibleSections, SECTION_FLAG];
      }

      return {
        ...prideContext,
        visibleSections: newSections,
      };
    }

    case TOGGLE_GIF_SECTION: {
      let newSections: SectionType[] = [];

      if (!visibleSections) {
        return {
          ...prideContext,
          visibleSections: [],
        };
      }

      if (visibleSections.includes(SECTION_GIF)) {
        newSections = visibleSections.filter(
          (section) => section !== SECTION_GIF
        );
      } else {
        newSections = [...visibleSections, SECTION_GIF];
      }

      return {
        ...prideContext,
        visibleSections: newSections,
      };
    }
    default:
      return prideContext;
  }
}
