import { useEffect, useContext, useState } from "react";
import { Alert, Grid, Rows } from "@canva/app-ui-kit";
import { SECTION_FLAG } from "../../data";
import { PrideContext } from "../../context/prideContext";
import Header from "../header";
import MiniFlags from "./miniFlags";
import Flag from "../flag";
import styles from "./flags.css";

const title = "Pride Flags";

const AddFlag = () => {
  const { flags, visibleSections } = useContext(PrideContext);
  const [variant, setVariant] = useState<"default" | "small">("default");
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (visibleSections && visibleSections.includes(SECTION_FLAG)) {
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
        <Header title={title} type={SECTION_FLAG} variant={variant} />
        {open ? (
          <div className={styles.flags}>
            {!flags || flags.length === 0 ? (
              <Alert tone="info">No flags found</Alert>
            ) : (
              <Grid columns={2} spacing="1u">
                {flags.map((flag) => (
                  <Flag key={flag.slug} flag={flag} variant="default" />
                ))}
              </Grid>
            )}
          </div>
        ) : (
          <MiniFlags title={title} type={SECTION_FLAG} />
        )}
      </Rows>
    </div>
  );
};

export default AddFlag;
