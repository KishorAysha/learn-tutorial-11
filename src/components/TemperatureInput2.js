import React from "react";

export default function TemperatureInput2({
  temperature,
  onTemperatureChange,
  scale,
}) {
  const scaleName = {
    c: "Celsius",
    f: "fehrenheit",
  };
  return (
    <fieldset>
      <legend>Enter temperature in {scaleName[scale]}</legend>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e, scale)}
      />
    </fieldset>
  );
}
