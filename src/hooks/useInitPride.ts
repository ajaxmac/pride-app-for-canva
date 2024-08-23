// hook to initiate loading of flags in prideReducer
import { useEffect, useContext } from "react";
import { PrideDispatchContext } from "../context/prideContext";
import { INIT_PRIDE, SEARCH_GIFS_RESULT } from "../context/actions";
import { fetchGifs } from "../lib";

export default function useInitPride() {
  const { dispatch } = useContext(PrideDispatchContext);

  const initialGifSearch = async () => {
    const gifs = await fetchGifs();
    dispatch({ type: SEARCH_GIFS_RESULT, payload: gifs });
  }

  useEffect(() => {
    dispatch({ type: INIT_PRIDE });
    initialGifSearch();
  }, [dispatch]);
}