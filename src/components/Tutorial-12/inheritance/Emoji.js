import React, { Component } from "react";

export default class Emoji extends Component {
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
  render(overlay) {
    let text = "I am the emoji Component";
    if (overlay) text = overlay;
    return <div>{text}</div>;
  }
}
