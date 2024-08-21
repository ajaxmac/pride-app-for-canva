/* eslint-disable no-console */
import { useMemo, useState } from "react";
import { Alert, Grid, MoreHorizontalIcon, Rows } from "@canva/app-ui-kit";
import FlagsHeader from "./header";
import Flag from "../flag";
import { FLAGS } from "./data";
import styles from "./flags.css";

const AddFlag = () => {
  const [flags, setFlags] = useState(FLAGS);
  const [open, setOpen] = useState(false);

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
    return (search: string) => {
      const newFlags = flags.filter((flag) => {
        return flag.name.toLowerCase().includes(search.toLowerCase());
      });

      setFlags(newFlags);
    };
  }, []);

  /**
   * Sort flags
   */
  const sortFlags = useMemo(() => {
    return (value: string) => {
      let newFlags = [...flags];

      switch (value) {
        case "default":
          newFlags = FLAGS;
          break;
        case "alphaAsc":
          newFlags = newFlags.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "alphaDesc":
          newFlags = newFlags.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "dateAsc":
          newFlags = newFlags.sort(
            (a, b) => parseInt(a.yearCreated, 10) - parseInt(b.yearCreated, 10)
          );
          break;
        case "dateDesc":
          newFlags = newFlags.sort(
            (a, b) => parseInt(b.yearCreated, 10) - parseInt(a.yearCreated, 10)
          );
          break;
        default:
          break;
      }

      setFlags(newFlags);
    };
  }, [flags]);

  return (
    <div className={styles.container}>
      <Rows spacing="2u">
        {open ? (
          <>
            <FlagsHeader
              flags={flags}
              doSearch={doSearch}
              sortFlags={sortFlags}
              toggle={toggle}
              open={open}
            />
            <div className={styles.flags}>
              {flags.length === 0 ? (
                <Alert tone="info">No flags found</Alert>
              ) : (
                <Grid columns={2} spacing="1u">
                  {flags.map((flag) => (
                    <Flag key={flag.slug} flag={flag} />
                  ))}
                </Grid>
              )}
            </div>
          </>
        ) : (
          <div className={styles.closed}>
            <FlagsHeader
              flags={flags}
              doSearch={doSearch}
              sortFlags={sortFlags}
              open={open}
              toggle={toggle}
              variant="small"
            />
            <div
              className={styles.miniFlags}
              onClick={toggle}
              aria-label="Toggle flags"
              tabIndex={0}
            >
              {flags.slice(0, 5).map((flag) => (
                <Flag key={flag.slug} flag={flag} variant="small" />
              ))}
              <MoreHorizontalIcon />
            </div>
          </div>
        )}
      </Rows>
    </div>
  );
};

export default AddFlag;
