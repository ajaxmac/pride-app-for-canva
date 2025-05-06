/* eslint-disable no-console */
import React, { createContext, useReducer } from "react";
import { prideReducer } from "./prideReducer";
import type { ActionType, PrideContextType } from "../types";

export const defaultPrideContext: PrideContextType = {
  flags: [],
  searchFlagsTerm: "",
  searchGifsTerm: "",
  nextGif: "",
  isSearchingGifs: false,
  searchResults: [],
  visibleSections: [],
  gifs: [],
};

const defaultDispatchContext = {
  dispatch: (args: ActionType) => {
    console.warn(args);
  },
};

export const PrideContext = createContext(defaultPrideContext);
export const PrideDispatchContext = createContext(defaultDispatchContext);

type ProviderProps = {
  children: React.ReactNode;
};

export default function PrideProvider({ children }: ProviderProps) {
  const [prideContext, dispatch] = useReducer(
    prideReducer,
    defaultPrideContext
  );

  return (
    <PrideContext.Provider value={prideContext}>
      <PrideDispatchContext.Provider value={{ dispatch }}>
        {children}
      </PrideDispatchContext.Provider>
    </PrideContext.Provider>
  );
}
