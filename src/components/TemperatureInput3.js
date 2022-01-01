import React from "react";
const scaleName = {
  c: "Celsius",
  f: "Fehrenheit",
};

export default function TemperatureInput3({
  temperature,
  scale,
  onTemperatureChange,
}) {
  return (
    <fieldset>
      <legend>Enter Temperature in {scaleName[scale]}</legend>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e, scale)}
      />
    </fieldset>
  );
}
