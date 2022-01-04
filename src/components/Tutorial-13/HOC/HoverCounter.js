import React from "react";
import withCounter from "./withCounter";
const HoverCounter = (props) => {
  const { count, handleCount } = props;
  return (
    <div>
      <h1 onMouseOver={handleCount}>Hovered {count} times</h1>
    </div>
  );
};

export default withCounter(HoverCounter);
