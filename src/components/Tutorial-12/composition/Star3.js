import React, { Component } from "react";

export default class Star3 extends Component {
  addStar3 = (text) => `* ${text} *`;
  render() {
    return <div>{this.props.children({ addStar3: this.addStar3 })}</div>;
  }
}
