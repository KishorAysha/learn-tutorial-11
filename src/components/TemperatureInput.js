import React from "react";
const scaleName = {
  c: "Celsius",
  f: "Fehrenheit",
};
export default function TemperatureInput({
  scale,
  temperature,
  onTemperatureChange,
}) {
  return (
    <>
      <fieldset>
        <legend>Enter temperature is {scaleName[scale]}</legend>
        <input
          type="text"
          value={temperature}
          onChange={(e) => onTemperatureChange(e, scale)}
        />
      </fieldset>
    </>
  );
}
