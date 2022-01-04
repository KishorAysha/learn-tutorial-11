import React from "react";
import withCounter2 from "./withCounter2";
const HoverCounter2 = ({ count, handleCount }) => {
  return (
    <div>
      <h1 onMouseOver={handleCount}>Hovered {count} time</h1>
    </div>
  );
};
export default withCounter2(HoverCounter2);
