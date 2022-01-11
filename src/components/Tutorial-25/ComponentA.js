import React from "react";
import ComponentB from "./ComponentB";

export default function ComponentA() {
  return (
    <div>
      <h1>This is Component A</h1>
      <p>Its render component B</p>
      <h2 className="h2">
        This h2 of ComponentA for useing css class in glabal
      </h2>
      <ComponentB />
    </div>
  );
}
