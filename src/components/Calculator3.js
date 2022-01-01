import React, { Component } from "react";
import { convert, toCelsius, toFehrenheit } from "../lib/converter3";
import TemperatureInput3 from "./TemperatureInput3";
import VoilVerdit3 from "./VoilVerdit3";

export default class Calculator3 extends Component {
  state = {
    temperature: "",
    scale: "c",
  };

  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale: scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    const Celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const Fehrenheit =
      scale === "c" ? convert(temperature, toFehrenheit) : temperature;
    return (
      <>
        <TemperatureInput3
          scale="c"
          temperature={Celsius}
          onTemperatureChange={this.handleChange}
        />
        <TemperatureInput3
          scale="f"
          temperature={Fehrenheit}
          onTemperatureChange={this.handleChange}
        />
        <VoilVerdit3 temperature={scale === "f" ? Celsius : Fehrenheit} />
      </>
    );
  }
}
