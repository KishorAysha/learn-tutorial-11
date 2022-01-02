import React, { Component } from "react";

export default class Emoji2 extends Component {
  addEmoji2 = (text, emoji2) => `${emoji2} ${text} ${emoji2}`;
  render() {
    return <div>{this.props.children({ addEmoji2: this.addEmoji2 })}</div>;
  }
}
