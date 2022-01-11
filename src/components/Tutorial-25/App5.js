import React from "react";
import "./Assets/global.css"; // stylesheet method
import ComponentA from "./ComponentA";
import ComponentC from "./ComponentC";
import ComponentE from "./ComponentE";

export default function App5() {
  return (
    <div>
      <h3 className="h3">This is stylesheet method</h3>
      <h1>This is global css of h1 tag</h1>
      <p>This global css of p tag</p>
      <hr />
      <ComponentA />
      <hr />
      <hr />
      <ComponentC />
      <hr />
      <hr />
      <ComponentE />
    </div>
  );
}
