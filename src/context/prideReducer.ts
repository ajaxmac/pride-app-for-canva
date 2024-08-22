import type { GifsResult } from "@giphy/js-fetch-api";
import type {
  ActionType,
  FlagType,
  PrideContextType,
  SectionType,
} from "../types";
import { FLAGS, SECTION_FLAG } from "../data";
import {
  INIT_PRIDE,
  SEARCH_FLAGS,
  SET_SEARCH_RESULTS,
  SET_VISIBLE_SEARCH_RESULTS,
  SET_VISIBLE_SECTIONS,
  SET_GIFS,
  SORT_FLAGS,
  TOGGLE_FLAG_SECTION,
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
        search,
        flags: searchResults,
      };
    }

    case SET_SEARCH_RESULTS:
      return {
        ...prideContext,
        searchResults: action.payload as FlagType[],
      };
    case SET_VISIBLE_SEARCH_RESULTS:
      return {
        ...prideContext,
        visibleSearchResults: action.payload as boolean,
      };
    case SET_VISIBLE_SECTIONS:
      return {
        ...prideContext,
        visibleSections: action.payload as unknown as SectionType[],
      };
    case SET_GIFS:
      return {
        ...prideContext,
        gifs: action.payload as GifsResult,
      };
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

      if (visibleSections.includes("flags")) {
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
    default:
      return prideContext;
  }
}
