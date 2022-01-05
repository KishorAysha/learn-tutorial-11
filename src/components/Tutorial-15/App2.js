import React, { Component } from "react";
import themeContext from "./lib/themeContext";
import themeContext2 from "./lib/themeContext2";
import themeContext3 from "./lib/themeContext3";
import Section from "./Section";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default class App2 extends Component {
  state = {
    theme: "dark",
    count2: 2,
  };
  render() {
    const { theme, count2 } = this.state;
    return (
      <>
        <themeContext.Provider value={{ theme }}>
          <Section />
        </themeContext.Provider>
        <themeContext2.Provider value={{ count2 }}>
          <Section2 />
        </themeContext2.Provider>
        <themeContext3.Provider value={{ count2 }}>
          <Section3 />
        </themeContext3.Provider>
      </>
    );
  }
}
