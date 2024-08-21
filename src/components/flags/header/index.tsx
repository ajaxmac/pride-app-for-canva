/* eslint-disable no-console */
import { useEffect, useState } from "react";
import {
  Button,
  ChevronDownIcon,
  ChevronRightIcon,
  Title,
} from "@canva/app-ui-kit";
import Filter from "../filter";
import Search from "../search";
import ToggleSearch from "../search/toggle";
import type { FlagType } from "../../../types";
import useKeyPress from "../../../hooks/useKeyPress";
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
  const [focus, setFocus] = useState<boolean>(false);
  const enterPressed = useKeyPress("Enter");

  useEffect(() => {
    if (enterPressed && focus) {
      toggle();
    }
  }, [enterPressed, focus]);

  const toggleSearch = () => {
    setIsSearch(!isSearching);
  };

  const toggleSwitch = () => {
    return (
      <div
        className={styles.title}
        onClick={toggle}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
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
            <ToggleSearch toggleSearch={toggleSearch} />
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
