/* eslint-disable no-console */
import { useState } from "react";
import { TextInput, ClearIcon } from "@canva/app-ui-kit";
import ClearSearch from "../search/clearSearch";
import type { FlagType } from "../../../types";
import styles from "./search.css";

type Props = {
  flags: FlagType[];
  doSearch: (search: string) => void;
};

const Search = (props: Props) => {
  const { doSearch } = props;
  const [search, setSearch] = useState<string>("");


  /**
   * Clear search
   */
  const clearSearch = () => {
    setSearch("");
    doSearch('');
  };

  /**
   * Handle Search
   */
  const handleSearch = (value: string) => {
    setSearch(value);
    console.log(value);
    doSearch(value);
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
