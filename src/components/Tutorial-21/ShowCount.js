import React from "react";

function ShowCount({ count, children }) {
  console.log(`${children} is rendered...`);
  return (
    <div>
      <p>
        {children}:{count}
      </p>
    </div>
  );
}
export default React.memo(ShowCount);
