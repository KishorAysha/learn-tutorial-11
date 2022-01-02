import React, { Component } from "react";

export default class Breaket2 extends Component {
  addBreaket2 = (text2) => `[ ${text2} ]`;
  render() {
    return <div>{this.props.children({ addBreaket2: this.addBreaket2 })}</div>;
  }
}
