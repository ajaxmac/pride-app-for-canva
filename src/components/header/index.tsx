import { useState } from "react";
import { Button } from "@canva/app-ui-kit";
import Filter from "../filter";
import Search from "../search";
import ToggleHeader from "./toggleHeader";
import ToggleSearch from "../search/toggle";
import type { SectionType } from "../../types";
import styles from "./header.css";

type Props = {
  type: SectionType;
  title: string;
  variant: "default" | "small";
};

const Header = (props: Props) => {
  const { variant = "default" } = props;
  const [isSearching, setIsSearch] = useState<boolean>(false);

  const toggleSearch = () => {
    setIsSearch(!isSearching);
  };

  return (
    <div className={styles.header}>
      {variant === "small" ? (
        <ToggleHeader {...props} />
      ) : isSearching ? (
        <>
          <Search {...props} />
          <Button variant="primary" onClick={toggleSearch}>
            Done
          </Button>
        </>
      ) : (
        <>
          <ToggleHeader {...props} />
          <div className={styles.headerButtons}>
            <Filter {...props} />
            <ToggleSearch toggleSearch={toggleSearch} />
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
