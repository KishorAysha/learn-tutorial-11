import React, { Component } from "react";
import { convert, toCelsius, toFehrenheit } from "../lib/converter2";
import TemperatureInput2 from "./TemperatureInput2";
import VoilVerdit2 from "./VoilVerdit2";

export default class Calculator2 extends Component {
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
        <TemperatureInput2
          scale="c"
          temperature={Celsius}
          onTemperatureChange={this.handleChange}
        />
        <TemperatureInput2
          scale="f"
          temperature={Fehrenheit}
          onTemperatureChange={this.handleChange}
        />
        <VoilVerdit2 temperature={temperature} />
      </>
    );
  }
}
