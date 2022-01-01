import React, { Component } from "react";
import { convert, toCelsius, toFehrenheit } from "../lib/converter";
import TemperatureInput from "./TemperatureInput";
import VoilVerdit from "./VoilVerdit";
export default class Calculator extends Component {
  state = {
    temperature: "",
    scale: "c",
  };
  HandleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale: scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const fehrenheit =
      scale === "c" ? convert(temperature, toFehrenheit) : temperature;
    return (
      <>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.HandleChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fehrenheit}
          onTemperatureChange={this.HandleChange}
        />
        <VoilVerdit celcius={parseFloat(temperature)} />
      </>
    );
  }
}
