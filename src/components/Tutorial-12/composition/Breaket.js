import { Component } from "react";

export default class Breaket extends Component {
  addBreaket = (text) => `[ ${text} ]`;
  render() {
    return this.props.children({ addBreaket: this.addBreaket });
  }
}
