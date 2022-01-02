import React, { Component } from "react";

export default class Emoji3 extends Component {
  addEmoji3 = (text3, emoji3) => `${emoji3} ${text3} ${emoji3}`;
  render() {
    return <div>{this.props.children({ addEmoji3: this.addEmoji3 })}</div>;
  }
}
