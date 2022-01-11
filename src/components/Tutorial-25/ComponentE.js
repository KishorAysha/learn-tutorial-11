import React, { useState } from "react";
import styles from "./Assets/Kishor.module.css";
export default function ComponentE() {
  const [stateColor, setStateColor] = useState("black");

  const randomColor = () => {
    const colors = ["red", "green", "orange", "blue", "purple"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
  };

  const style = {
    color: "red",
    border: "1px solid green",
    backgroundColor: "purple",
  };
  return (
    <div>
      <h4
        className={`${styles.h4} ${styles.border}`}
        style={{ color: stateColor }}
      >
        Random Color is {stateColor}
      </h4>
      <div className={`${styles.btn_div} bg`}>
        <button
          className={styles.button}
          type="button"
          onClick={() => setStateColor(randomColor())}
        >
          Change Color
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={() => setStateColor("black")}
        >
          Reset Color
        </button>
        <hr />
        <h4
          style={{
            color: "red",
            border: "1px solid red",
            width: "50%",
            margin: "5px auto",
          }}
        >
          Color:{stateColor}
          {stateColor === "red" ? alert("Now got red") : null}
        </h4>

        <h4 style={style}>This is inline css</h4>
      </div>
    </div>
  );
}
