/* eslint-disable no-console */
import { useState } from "react";
import {
  Button,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
  Title,
} from "@canva/app-ui-kit";
import Filter from "../filter";
import Search from "../search";
import type { FlagType } from "../../../types";
import styles from "./header.css";

type Props = {
  flags: FlagType[];
  doSearch: (search: string) => void;
  open: boolean;
  toggle: () => void;
  sortFlags: (value: string) => void;
  variant: "default" | "small";
};

const FlagsHeader = (props: Props) => {
  const { open, toggle, variant } = props;
  const [isSearching, setIsSearch] = useState<boolean>(false);

  const toggleSearch = () => {
    setIsSearch(!isSearching);
  };

  const toggleSwitch = () => {
    return (
      <div
        className={styles.title}
        onClick={toggle}
        aria-label="Toggle flags"
        tabIndex={0}
      >
        <Title>Pride Flags</Title>
        {open ? <ChevronDownIcon /> : <ChevronRightIcon />}
      </div>
    );
  };

  return (
    <div className={styles.header}>
      {variant === "small" ? (
        toggleSwitch()
      ) : isSearching ? (
        <>
          <Search {...props} />
          <Button variant="primary" onClick={toggleSearch}>
            Done
          </Button>
        </>
      ) : (
        <>
          {toggleSwitch()}
          <div className={styles.headerButtons}>
            <Filter {...props} />
            <div
              className={styles.searchIcon}
              onClick={toggleSearch}
              aria-label="Toggle search"
              tabIndex={0}
            >
              <SearchIcon />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

FlagsHeader.defaultProps = {
  variant: "default",
};

export default FlagsHeader;
