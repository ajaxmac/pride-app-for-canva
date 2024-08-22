import { useContext } from "react";
import { Alert, Grid, Rows } from "@canva/app-ui-kit";
import { SECTION_FLAG } from "../../data";
import { PrideContext } from "../../context/prideContext";
import Header from "../header";
import MiniFlags from "./miniFlags";
import Flag from "../flag";
import styles from "./flags.css";

const AddFlag = () => {
  const { flags, visibleSections } = useContext(PrideContext);
  const title = "Pride Flags";

  return (
    <div className={styles.container}>
      <Rows spacing="2u">
        {visibleSections.includes(SECTION_FLAG) ? (
          <>
            <Header title={title} type={SECTION_FLAG} variant="default" />
            <div className={styles.flags}>
              {flags.length === 0 ? (
                <Alert tone="info">No flags found</Alert>
              ) : (
                <Grid columns={2} spacing="1u">
                  {flags.map((flag) => (
                    <Flag key={flag.slug} flag={flag} variant="default" />
                  ))}
                </Grid>
              )}
            </div>
          </>
        ) : (
          <div className={styles.closed}>
            <Header title="Pride Flags" type={SECTION_FLAG} variant="small" />
            <MiniFlags title={title} type={SECTION_FLAG} />
          </div>
        )}
      </Rows>
    </div>
  );
};

export default AddFlag;
