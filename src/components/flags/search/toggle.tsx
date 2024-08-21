import {
  SearchIcon
} from "@canva/app-ui-kit";
import styles from "./search.css";
import { useEffect, useState } from "react";
import useKeyPress from "../../../hooks/useKeyPress";

type Props = {
  toggleSearch: () => void;
};

const ToggleSearch = (props: Props) => {
  const [focus, setFocus] = useState<boolean>(false);
  const enterPressed = useKeyPress("Enter");
  const { toggleSearch } = props;

  useEffect(() => {
    if (enterPressed && focus) {
      toggleSearch();
    }
  }, [enterPressed, focus]);

  return (
    <div
      className={styles.searchIcon}
      onClick={toggleSearch}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      aria-label="Toggle search"
      tabIndex={0}
    >
      <SearchIcon />
    </div>
  );
};

export default ToggleSearch;
