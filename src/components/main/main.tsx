import { InfoIcon, Text } from "@canva/app-ui-kit";
import AddFlag from "../flags";
import AddGif from "../gifs";
import useInitPride from "../../hooks/useInitPride";
import "styles/variables.css";
import styles from "styles/components.css";

export const Main = () => {
  useInitPride();

  return (
    <div className={styles.scrollContainer}>
      <div className={styles.description}>
        <InfoIcon />
        <Text>All of your PRIDE and LGBTIQ+ design resources in one place</Text>
      </div>
      <AddFlag />
      <AddGif />
    </div>
  );
};

export default Main;
