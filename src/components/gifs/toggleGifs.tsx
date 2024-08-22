import { useContext, useEffect, useState } from "react";
import { Grid } from "@canva/app-ui-kit";
import { TOGGLE_GIF_SECTION } from "../../context/actions";
import { PrideDispatchContext } from "../../context/prideContext";
import Gif from "../gif";
import useKeyPress from "../../hooks/useKeyPress";
import type { GifType } from "../../types";
import styles from "./gifs.css";

type Props = {
  gifs: GifType[];
};

const ToggleGifs = (props: Props) => {
  const { gifs } = props;
  const { dispatch } = useContext(PrideDispatchContext);
  const [focus, setFocus] = useState<boolean>(false);
  const enterPressed = useKeyPress("Enter");

  const toggle = () => {
    dispatch({ type: TOGGLE_GIF_SECTION });
  };

  useEffect(() => {
    if (enterPressed && focus) {
      toggle();
    }
  }, [enterPressed, focus]);

  return (
    <div
      className={styles.toggleGifs}
      onClick={toggle}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      aria-label="Toggle Gifs"
      tabIndex={0}
    >
      <Grid columns={5} spacing="1u">
        {gifs.map((gif, index) => (
          <Gif key={index} gif={gif} />
        ))}
      </Grid>
    </div>
  );
};

export default ToggleGifs;
