import React from "react";
import HoverCounter2 from "./HoverCounter2";
import themeContext2 from "./lib/themeContext2";

export default function Content2() {
  return (
    <div>
      <h1>This is Content</h1>
      <themeContext2.Consumer>
        {({ count2 }) => <HoverCounter2 count2={count2} />}
      </themeContext2.Consumer>
    </div>
  );
}
