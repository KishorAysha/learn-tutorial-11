import React from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import themeContext from "./lib/themeContext";

export default function Content() {
  return (
    <div>
      <h1>This is a Content Component</h1>
      <Counter>
        {(count, handleCount) => {
          return (
            <themeContext.Consumer>
              {({ theme }) => (
                <HoverCounter
                  theme={theme}
                  count={count}
                  handleCount={handleCount}
                />
              )}
            </themeContext.Consumer>
          );
        }}
      </Counter>
    </div>
  );
}
