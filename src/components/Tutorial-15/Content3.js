import React from "react";
import HoverCounter3 from "./HoverCounter3";
import themeContext3 from "./lib/themeContext3";

export default function Content3() {
  return (
    <div>
      <h1>This is Content</h1>
      <themeContext3.Consumer>
        {({ count2 }) => <HoverCounter3 count2={count2} />}
      </themeContext3.Consumer>
    </div>
  );
}
