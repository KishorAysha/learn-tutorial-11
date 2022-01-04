import React from "react";

export default function ClickCounter2({ count, handleCount }) {
  return (
    <div>
      <button type="button" onClick={handleCount}>
        Clicked {count} time
      </button>
    </div>
  );
}
