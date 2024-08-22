import { useMemo, useState } from "react";
import { Alert, Grid, MoreHorizontalIcon, Rows } from "@canva/app-ui-kit";
import Header from "../header";
import styles from "./gifs.css";

const AddGif = () => {
  const [gifs, setGifs] = useState([]);
  const [open, setOpen] = useState(true);

  /**
   * Toggle the flags
   */
  const toggle = () => {
    setOpen(!open);
  };

  /**
   * Search for flags
   */
  const doSearch = useMemo(() => {
    // search giphy
    setGifs([]);
  }, []);

  /**
   * Sort flags
   */
  const sortFlags = useMemo(() => {
   // do giphy search and sort

  }, []);

  return (
    <div className={styles.container}>
      <Rows spacing="2u">
        {open ? (
          <>
            <Header
              doSearch={doSearch}
              sort={sortFlags}
              title="GIFs"
              toggle={toggle}
              open={open}
              variant="default"
            />
            <div className={styles.gifs}>
              {gifs.length === 0 ? (
                <Alert tone="info">No GIFs found</Alert>
              ) : (
                <Grid columns={2} spacing="1u">
                  {gifs.map((gif, index) => (
                    <div key={index}>GIF Goes here</div>
                  ))}
                </Grid>
              )}
            </div>
          </>
        ) : (
          <div className={styles.closed}>
            <Header
              doSearch={doSearch}
              sort={sortFlags}
              open={open}
              title="GIFs"
              toggle={toggle}
              variant="small"
            />
            <div
              className={styles.miniFlags}
              onClick={toggle}
              aria-label="Toggle flags"
              tabIndex={0}
            >
              {gifs.slice(0, 5).map((gif, index) => (
                <div key={index}>GIF Goes here</div>
              ))}
              <MoreHorizontalIcon />
            </div>
          </div>
        )}
      </Rows>
    </div>
  );
};

export default AddGif;
