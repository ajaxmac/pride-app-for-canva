import { InfoIcon, Text, Spacer } from "@canva/app-ui-kit";
import AddFlag from "./components/flags";
import "styles/variables.css";
import styles from "styles/components.css";

export const App = () => {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.description}>
        <InfoIcon />
        <Text>All your pride and LGBTIQ+ design resources in one place</Text>
      </div>
      <AddFlag />
    </div>
  );
};
