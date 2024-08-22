/* eslint-disable no-console */
import React, { createContext, useReducer } from "react";
import { prideReducer } from "./prideReducer";
import type { PrideContextType } from "../types";

export const defaultPrideContext: PrideContextType = {
  flags: [],
  search: "",
  searchResults: [],
  visibleSearchResults: false,
  visibleSections: ["flags"],
  gifs: {
    data: [],
    pagination: { total_count: 0, count: 0, offset: 0 },
    meta: {
      msg: "",
      response_id: "",
      status: 0,
    },
  },
};

const defaultDispatchContext = {
  dispatch: (args: unknown) => {
    console.warn(args);
  },
};

export const PrideContext = createContext(defaultPrideContext);
export const PrideDispatchContext = createContext(defaultDispatchContext);

type ProviderProps = {
  children: React.ReactNode;
};

export default function PrideProvider({ children }: ProviderProps) {
  const [prideContext, dispatch] = useReducer(prideReducer, defaultPrideContext);

  return (
    <PrideContext.Provider value={prideContext}>
      <PrideDispatchContext.Provider value={{ dispatch }}>
        {children}
      </PrideDispatchContext.Provider>
    </PrideContext.Provider>
  );
}