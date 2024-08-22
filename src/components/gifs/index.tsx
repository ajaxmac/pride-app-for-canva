import { useContext, useEffect, useState } from "react";
import { Alert, Grid, ImageCard, Rows } from "@canva/app-ui-kit";
import { SECTION_GIF } from "../../data";
import Header from "../header";
import Gif from "../gif";
import ToggleGifs from "./toggleGifs";
import GIPHY_LOGO_WHITE from "../../assets/images/giphy-white.png";
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
          ) : open ? (
            <Grid columns={2} spacing="1u">
              {gifs.map((gif, index) => (
                <Gif key={index} gif={gif} />
              ))}
            </Grid>
          ) : (
            <ToggleGifs gifs={gifs} />
          )}
        </div>
      </Rows>
      <div className={styles.giphyLogo}>
        <div />
        <ImageCard thumbnailUrl={GIPHY_LOGO_WHITE} alt="Powered by Giphy" />
      </div>
    </div>
  );
};

export default AddGif;
