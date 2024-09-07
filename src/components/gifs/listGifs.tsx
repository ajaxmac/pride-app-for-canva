import { useContext } from "react";
import { Alert, Grid } from "@canva/app-ui-kit";
import Gif from "../gif";
import { PrideContext } from "../../context/prideContext";
import styles from "./gifs.css";

const ListGifs = () => {
  const { gifs } = useContext(PrideContext);

  return (
    <div className={styles.listGifs}>
      {!gifs || gifs.length === 0 ? (
        <Alert tone="info">No GIFs found</Alert>
      ) : (
        <>
          <Grid columns={4} spacing="1u">
            {gifs.map((gif, index) => (
              <Gif key={index} gif={gif} allowClick={true} />
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default ListGifs;
