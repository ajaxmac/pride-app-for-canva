/* eslint-disable no-console */
import { useEffect, useState } from "react";
import { ClearIcon } from "@canva/app-ui-kit";
import useKeyPress from "../../../hooks/useKeyPress";
import styles from "./search.css";

type Props = {
  clearSearch: () => void;
};

const ClearSearch = (props: Props) => {
  const { clearSearch } = props;
  const [focus, setFocus] = useState<boolean>(false);
  const enterPressed = useKeyPress("Enter");

  useEffect(() => {
    if (enterPressed && focus) {
      clearSearch();
    }
  }, [enterPressed, focus]);

  return (
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
