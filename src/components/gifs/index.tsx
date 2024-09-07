import { useContext, useEffect, useState } from "react";
import { Rows } from "@canva/app-ui-kit";
import { SECTION_GIF } from "../../data";
import Header from "../header";
import ToggleGifs from "./toggleGifs";
import ListGifs from "./listGifs";
import LoadMoreGifs from "../load-more-gifs";
import TenorLogo from "../tenor";
import { PrideContext } from "src/context/prideContext";
import styles from "./gifs.css";

const AddGif = () => {
  const { visibleSections } = useContext(PrideContext);
  const [variant, setVariant] = useState<"default" | "small">("small");
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
    <div className={styles.gifsContainer}>
      <Rows spacing="2u">
        <Header title="GIFs" type={SECTION_GIF} variant={variant} />
        {open ? (
          <div className={styles.gifsOpen}>
            <ListGifs />
            <LoadMoreGifs />
            <TenorLogo />
          </div>
        ) : (
          <ToggleGifs />
        )}
      </Rows>
    </div>
  );
};

export default AddGif;
