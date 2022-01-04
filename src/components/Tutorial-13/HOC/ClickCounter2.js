import React from "react";
import withCounter2 from "./withCounter2";
const ClickCounter2 = ({ count, handleCount }) => {
  return (
    <div>
      <button type="button" onClick={handleCount}>
        Clicked {count} time
      </button>
    </div>
  );
};
export default withCounter2(ClickCounter2);
