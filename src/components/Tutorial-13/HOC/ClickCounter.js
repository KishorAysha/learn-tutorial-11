import React from "react";
import withCounter from "./withCounter";
const ClickCounter = (props) => {
  const { count, handleCount } = props;
  return (
    <div>
      <button type="button" onClick={handleCount}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default withCounter(ClickCounter);
