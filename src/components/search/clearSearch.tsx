import { useContext, useEffect, useState } from "react";
import { ClearIcon } from "@canva/app-ui-kit";
import useKeyPress from "../../hooks/useKeyPress";
import { PrideContext, PrideDispatchContext } from "../../context/prideContext";
import { SECTION_FLAG, SECTION_GIF } from "../../data";
import { SEARCH_FLAGS, SEARCH_GIFS, SEARCH_GIFS_LOADING, SEARCH_GIFS_RESULT } from "../../context/actions";
import { fetchGifs } from "src/lib";
import type { SectionType } from "../../types";
import styles from "./search.css";

type Props = {
  title: string;
  type: SectionType;
};

const ClearSearch = (props: Props) => {
  const { type } = props;
  const { searchFlagsTerm, searchGifsTerm } = useContext(PrideContext);
  const { dispatch } = useContext(PrideDispatchContext);
  const [focus, setFocus] = useState<boolean>(false);
  const [search, setSearch] = useState<string>(
    type === SECTION_FLAG ? searchFlagsTerm : searchGifsTerm
  );

  useEffect(() => {
    setSearch(type === SECTION_FLAG ? searchFlagsTerm : searchGifsTerm);
  }, [searchFlagsTerm, searchGifsTerm]);
  
  const enterPressed = useKeyPress("Enter");
  const escPressed = useKeyPress("Escape");

  const searchTenor = async () => {
    const result = await fetchGifs('');
    dispatch({ type: SEARCH_GIFS_RESULT, payload: result });
    dispatch({ type: SEARCH_GIFS_LOADING, payload: false });
  };

  /**
   * Clear search
   */
  const clearSearch = () => {
    switch (type) {
      case SECTION_FLAG:
        dispatch({ type: SEARCH_FLAGS, payload: "" });
        break;
      case SECTION_GIF:
        dispatch({ type: SEARCH_GIFS, payload: "" });
        searchTenor();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (escPressed || (enterPressed && focus)) {
      clearSearch();
    }
  }, [escPressed, enterPressed, focus]);

  return search === '' ? null : (
    <div
      className={styles.clearIcon}
      onClick={clearSearch}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      aria-label="Clear search"
      tabIndex={0}
    >
      <ClearIcon />
    </div>
  );
};

export default ClearSearch;
