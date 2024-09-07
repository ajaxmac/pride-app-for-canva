import { useContext, useEffect, useState } from "react";
import { Alert, Grid } from "@canva/app-ui-kit";
import { TOGGLE_GIF_SECTION } from "../../context/actions";
import { PrideContext, PrideDispatchContext } from "../../context/prideContext";
import Gif from "../gif";
import type { GifType } from "../../types";
import useKeyPress from "../../hooks/useKeyPress";
import styles from "./gifs.css";

const ToggleGifs = () => {
  const { dispatch } = useContext(PrideDispatchContext);
  const { gifs } = useContext(PrideContext);
  const [display, setDisplay] = useState<GifType[]>([]);
  const [focus, setFocus] = useState<boolean>(false);
  const enterPressed = useKeyPress("Enter");

  const toggle = () => {
    dispatch({ type: TOGGLE_GIF_SECTION });
  };

  useEffect(() => {
    if (gifs && gifs.length > 0) {
      setDisplay(gifs.slice(0, 4));
    }
  }, [gifs]);

  useEffect(() => {
    if (enterPressed && focus) {
      toggle();
    }
  }, [enterPressed, focus]);

  return (
    <div
      className={styles.toggleGifs}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onClick={toggle}
      tabIndex={0}
    >
      {!gifs || gifs.length === 0 ? (
        <Alert tone="info">No GIFs found</Alert>
      ) : (
        <Grid columns={4} spacing="1u">
          {display.map((gif, index) => (
            <Gif key={index} gif={gif} allowClick={false} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ToggleGifs;
