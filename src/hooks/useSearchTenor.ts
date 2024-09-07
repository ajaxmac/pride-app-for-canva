import { useContext } from "react";
import { PrideDispatchContext } from "../context/prideContext";
import { SEARCH_GIFS_RESULT } from "../context/actions";
import { fetchGifs } from "../lib";

const useSearchTenor = async (search: string) => {
  const { dispatch } = useContext(PrideDispatchContext);

  const result = await fetchGifs(search);
  dispatch({ type: SEARCH_GIFS_RESULT, payload: result });
};

export default useSearchTenor;
