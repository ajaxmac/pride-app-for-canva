import { useContext, useEffect, useState } from "react";
import { Alert, Grid, Rows } from "@canva/app-ui-kit";
import { SECTION_GIF } from "../../data";
import Header from "../header";
import Gif from "../gif";
import ToggleGifs from "./toggleGifs";
import LoadMoreGifs from "../load-more-gifs";
import TenorLogo from "../tenor";
import styles from "./gifs.css";
import { PrideContext } from "src/context/prideContext";

const title = "GIFs";

const AddGif = () => {
  const { gifs, visibleSections } = useContext(PrideContext);
  const [variant, setVariant] = useState<"default" | "small">("default");
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (visibleSections && visibleSections.includes(SECTION_GIF)) {
      setVariant("default");
      setOpen(true);
    } else {
      setVariant("small");
      setOpen(false);
    }
  }, [visibleSections]);

  return (
    <div className={styles.container}>
      <Rows spacing="2u">
        <Header title={title} type={SECTION_GIF} variant={variant} />
        <div className={styles.gifs}>
          {!gifs || gifs.length === 0 ? (
            <Alert tone="info">No GIFs found</Alert>
          ) : (
            <ToggleGifs gifs={gifs} />
          )}
        </div>
      </Rows>
      <LoadMoreGifs />
      <div className={styles.giphyLogo}>
        <TenorLogo />
      </div>
    </div>
  );
};

export default AddGif;
