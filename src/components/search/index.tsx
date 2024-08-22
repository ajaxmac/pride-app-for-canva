import { useContext } from "react";
import { TextInput } from "@canva/app-ui-kit";
import ClearSearch from "../search/clearSearch";
import { useContext } from "react";
import { PrideContext, PrideDispatchContext } from "../../context/prideContext";
import type { SectionType } from "../../types";
import { SECTION_FLAG, SECTION_GIF } from "../../data";
import { SEARCH_FLAGS, SEARCH_GIFS } from "../../context/actions";
import styles from "./search.css";

type Props = {
  type: SectionType;
};

const Search = (props: Props) => {
  const { type } = props;
  const { search } = useContext(PrideContext);
  const { dispatch } = useContext(PrideDispatchContext);


  /**
   * Clear search
   */
  const clearSearch = () => {
    switch(type) {
      case SECTION_FLAG:
        dispatch({ type: SEARCH_FLAGS, payload: '' });
        break;
      case SECTION_GIF:
        dispatch({ type: SEARCH_GIFS, payload: '' });
        break;
      default:
        break;
    }
  };

  /**
   * Handle Search
   */
  const handleSearch = (value: string) => {
    switch(type) {
      case SECTION_FLAG:
        dispatch({ type: SEARCH_FLAGS, payload: value });
        break;
      case SECTION_GIF:
        dispatch({ type: SEARCH_GIFS, payload: value });
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.search}>
      <TextInput
        placeholder="Search Flags"
        type="search"
        end={<ClearSearch clearSearch={clearSearch}/>}
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
};

export default Search;
