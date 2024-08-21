import { useState } from "react";
import { Button, Title, SearchIcon } from "@canva/app-ui-kit";
import Search from "../search";
import type { FlagType } from "../../../types";
import styles from "./header.css";

type Props = {
  flags: FlagType[];
  doSearch: (search: string) => void;
};

const FlagsHeader = (props: Props) => {
  const { doSearch } = props;
  const [isSearching, setIsSearch] = useState<boolean>(false);

  const toggleSearch = () => {
    setIsSearch(!isSearching);
    doSearch('');
  };

  return (
    <div className={styles.header}>
      {isSearching ? (
        <>
          <Search {...props} />
          <Button variant="primary" onClick={toggleSearch}>
            Done
          </Button>
        </>
      ) : (
        <>
          <Title>Pride Flags</Title>
          <div
            className={styles.searchIcon}
            onClick={toggleSearch}
            aria-label="Toggle search"
          >
            <SearchIcon />
          </div>
        </>
      )}
    </div>
  );
};

export default FlagsHeader;
