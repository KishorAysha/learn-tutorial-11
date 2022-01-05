import React from "react";
import Content from "./Content";

export default function Section() {
  console.log("Section Rendered");
  return (
    <div>
      <h1>This is Section</h1>
      <Content />
    </div>
  );
}
