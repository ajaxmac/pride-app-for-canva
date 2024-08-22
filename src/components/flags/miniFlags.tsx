import { useContext, useEffect, useState } from "react";
import { MoreHorizontalIcon } from "@canva/app-ui-kit";
import { SECTION_FLAG } from "../../data";
import { TOGGLE_FLAG_SECTION } from "../../context/actions";
import { PrideContext, PrideDispatchContext } from "../../context/prideContext";
import Flag from "../flag";
import useKeyPress from "../../hooks/useKeyPress";
import type { SectionType } from "../../types";
import styles from "./flags.css";

type Props = {
  title: string;
  type: SectionType;
};

const MiniFlags = (props: Props) => {
  const { title, type } = props;
  const { flags } = useContext(PrideContext);
  const { dispatch } = useContext(PrideDispatchContext);
  const [focus, setFocus] = useState<boolean>(false);
  const enterPressed = useKeyPress("Enter");

  const toggle = () => {
    switch (type) {
      case SECTION_FLAG:
        dispatch({ type: TOGGLE_FLAG_SECTION });
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
    <div className={styles.closed}>
      <div
        className={styles.miniFlags}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        aria-label={`Toggle ${title}`}
        tabIndex={0}
        onClick={toggle}
      >
        {flags && flags.slice(0, 5).map((flag) => (
          <Flag key={flag.slug} flag={flag} variant="small" />
        ))}
        <MoreHorizontalIcon />
      </div>
    </div>
  );
};

export default MiniFlags;
