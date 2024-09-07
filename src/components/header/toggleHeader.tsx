import { useContext, useEffect, useState } from "react";
import { ChevronDownIcon, ChevronRightIcon, Title } from "@canva/app-ui-kit";
import { SECTION_FLAG, SECTION_GIF } from "../../data";
import { TOGGLE_FLAG_SECTION, TOGGLE_GIF_SECTION } from "../../context/actions";
import { PrideContext, PrideDispatchContext } from "../../context/prideContext";
import useKeyPress from "../../hooks/useKeyPress";
import type { SectionType } from "../../types";
import styles from "./header.css";

type Props = {
  type: SectionType;
  title: string;
};

const Header = (props: Props) => {
  const { title = "Pride Flags", type } = props;
  const { visibleSections } = useContext(PrideContext);
  const { dispatch } = useContext(PrideDispatchContext);
  const [focus, setFocus] = useState<boolean>(false);
  const enterPressed = useKeyPress("Enter");

  const toggle = () => {
    switch (type) {
      case SECTION_FLAG:
        dispatch({ type: TOGGLE_FLAG_SECTION });
        break;

      case SECTION_GIF:
        dispatch({ type: TOGGLE_GIF_SECTION });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (enterPressed && focus) {
      toggle();
    }
  }, [enterPressed, focus]);

  return (
    <div
      className={styles.title}
      onClick={toggle}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      aria-label={`Toggle ${title}`}
      tabIndex={0}
    >
      <Title>{title}</Title>
      {visibleSections && visibleSections.includes(type) ? (
        <ChevronDownIcon />
      ) : (
        <ChevronRightIcon />
      )}
    </div>
  );
};

export default Header;
