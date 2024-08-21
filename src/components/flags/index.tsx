/* eslint-disable no-console */
import { useMemo, useState } from "react";
import { Alert, Rows } from "@canva/app-ui-kit";
import FlagsHeader from "./header";
import Flag from "../flag";
import { FLAGS } from "./data";
import styles from "./flags.css";

const AddFlag = () => {
  const [flags, setFlags] = useState(FLAGS);

  const doSearch = useMemo(() => {
    return (search: string) => {
      const newFlags = FLAGS.filter((flag) => {
        return flag.name.toLowerCase().includes(search.toLowerCase());
      });

      setFlags(newFlags);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Rows spacing="2u">
        <FlagsHeader flags={flags} doSearch={doSearch} />
        <div className={styles.flags}>
          {flags.length === 0 ? (
            <Alert tone="info">No flags found</Alert>
          ) : (
            flags.map((flag) => <Flag key={flag.slug} flag={flag} />)
          )}
        </div>
      </Rows>
    </div>
  );
};

export default AddFlag;
