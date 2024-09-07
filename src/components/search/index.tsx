/* eslint-disable no-console */
import { useContext, useEffect, useState } from "react";
import { TextInput } from "@canva/app-ui-kit";
import ClearSearch from "../search/clearSearch";
import { LoadingIndicator, SearchIcon } from "@canva/app-ui-kit";
import { PrideContext, PrideDispatchContext } from "../../context/prideContext";
import type { SectionType } from "../../types";
import { SECTION_FLAG, SECTION_GIF } from "../../data";
import { SEARCH_FLAGS, SEARCH_GIFS, SEARCH_GIFS_RESULT } from "../../context/actions";
import { fetchGifs } from "../../lib";
import styles from "./search.css";

type Props = {
  title: string,
  type: SectionType;
};

const Search = (props: Props) => {
  const { title, type } = props;
  const { searchFlagsTerm, searchGifsTerm, isSearchingGifs } = useContext(PrideContext);
  const { dispatch } = useContext(PrideDispatchContext);
  const [search, setSearch] = useState<string>(
    type === SECTION_FLAG ? searchFlagsTerm : searchGifsTerm
  );

  useEffect(() => {
    setSearch(type === SECTION_FLAG ? searchFlagsTerm : searchGifsTerm);
  }, [searchFlagsTerm, searchGifsTerm]);

  const searchTenor = async () => {
    const result = await fetchGifs(search);
    dispatch({ type: SEARCH_GIFS_RESULT, payload: result });
  };

  /**
   * Handle Search
   */
  const handleSearch = async (value: string) => {
    switch (type) {
      case SECTION_FLAG:
        dispatch({ type: SEARCH_FLAGS, payload: value });
        break;
      case SECTION_GIF: {
        dispatch({ type: SEARCH_GIFS, payload: value });
        searchTenor();
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className={styles.search}>
      <TextInput
        placeholder={`Search ${title}`}
        type="search"
        start={isSearchingGifs ? <LoadingIndicator /> : <SearchIcon />}
        end={<ClearSearch {...props} />}
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
};

export default Search;
