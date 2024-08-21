import { useState } from "react";
import { Select, SlidersIcon } from "@canva/app-ui-kit";
import styles from "./filter.css";

type Props = {
  sortFlags: (value: string) => void;
};

const Filter = (props: Props) => {
  const { sortFlags } = props;

  const doFilter = (value: string) => {
    sortFlags(value);
  };

  const OPTIONS = [
    {value: 'default', label: 'Default'},
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
