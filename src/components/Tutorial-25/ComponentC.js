import React from "react";
import styles from "./Assets/Kishor.module.css";
import ComponentD from "./ComponentD";

export default function ComponentC() {
  return (
    <div>
      <h4 className={styles.h4}>This is CSS module</h4>
      <h3 className={styles.h3}>This is Component C for css module</h3>
      <ComponentD />
    </div>
  );
}
