import React from "react";

function Button({ handleCount, children }) {
  console.log(`${children} is rendered ...`);
  return (
    <div>
      <button type="button" onClick={handleCount}>
        {children}
      </button>
    </div>
  );
}

export default React.memo(Button);
