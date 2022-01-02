import React, { Component } from "react";

export default class Breaket2 extends Component {
  addBreaket = (text) => `[ ${text} ]`;
  render() {
    return <div>{this.props.children({ addBreaket: this.addBreaket })}</div>;
  }
}
