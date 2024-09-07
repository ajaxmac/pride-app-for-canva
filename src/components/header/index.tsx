import { useState } from "react";
import { Button } from "@canva/app-ui-kit";
import Filter from "../filter";
import Search from "../search";
import ToggleHeader from "./toggleHeader";
import ToggleSearch from "../search/toggle";
import type { SectionType } from "../../types";
import styles from "./header.css";
import { SECTION_FLAG, SECTION_GIF } from "../../data";

type Props = {
  type: SectionType;
  title: string;
  variant: "default" | "small";
};

const Header = (props: Props) => {
  const { type, variant = "default" } = props;
  const [isSearching, setIsSearch] = useState<boolean>(false);

  const toggleSearch = () => {
    setIsSearch(!isSearching);
  };

  switch (true) {
    case (type === SECTION_FLAG) && (variant === "small"):
      return <ToggleHeader {...props} />;
    case isSearching && type === SECTION_FLAG:
      return (
        <>
          <Search {...props} />
          <Button variant="primary" onClick={toggleSearch}>
            Done
          </Button>
        </>
      );
    case type === SECTION_FLAG:
      return (
        <>
          <ToggleHeader {...props} />
          <div className={styles.headerButtons}>
            <Filter {...props} />
            <ToggleSearch toggleSearch={toggleSearch} />
          </div>
        </>
      );
    case type === SECTION_GIF && (variant === "small"):
      return (
        <div className={styles.headerGifs}>
          <ToggleHeader {...props} />
        </div>
      );

    case type === SECTION_GIF:
      return (
        <div className={styles.headerGifs}>
          <ToggleHeader {...props} />
          <Search {...props} />
        </div>
      );
    default:
      return null;
  }
};

export default Header;
