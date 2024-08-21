/* eslint-disable no-console */
import { useState } from "react";
import { TextInput, ClearIcon } from "@canva/app-ui-kit";
import type { FlagType } from "../../../types";
import styles from "./search.css";

type Props = {
  flags: FlagType[];
  doSearch: (search: string) => void;
};

const Search = (props: Props) => {
  const { doSearch } = props;
  const [search, setSearch] = useState<string>("");

  const clearSearch = () => {
    setSearch("");
    doSearch('');
  };

  const clearSearchIcon = () => {
    return (
      <div
        className={styles.clearIcon}
        onClick={clearSearch}
        aria-label="Clear search"
      >
        <ClearIcon />
      </div>
    );
  };
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
        end={clearSearchIcon}
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
};

export default Search;
