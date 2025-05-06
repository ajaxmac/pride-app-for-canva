import { useContext } from "react";
import { Select } from "@canva/app-ui-kit";
import { PrideDispatchContext } from "../../context/prideContext";
import { SECTION_FLAG, SECTION_GIF } from "../../data";
import { SORT_FLAGS, SORT_GIFS } from "../../context/actions";
import type { SectionType } from "../../types";
import styles from "./filter.css";

type Props = {
  type: SectionType;
};

const Filter = (props: Props) => {
  const { type } = props;
  const { dispatch } = useContext(PrideDispatchContext);

  const doFilter = (value: string) => {
    switch (type) {
      case SECTION_FLAG:
        dispatch({ type: SORT_FLAGS, payload: value });
        break;
      case SECTION_GIF:
        dispatch({ type: SORT_GIFS, payload: value });
        break;
      default:
        break;
    }
  };

  const OPTIONS = [
    { value: "default", label: "Default" },
    { value: "alphaAsc", label: "A - Z" },
    { value: "alphaDesc", label: "Z - A" },
    { value: "dateAsc", label: "Date ASC" },
    { value: "dateDesc", label: "Date DESC" },
  ];

  return (
    <div className={styles.filter}>
      <Select
        onChange={(value) => doFilter(value)}
        options={OPTIONS}
        placeholder="Sort by"
        stretch={true}
      />
    </div>
  );
};

export default Filter;
