import React, { Component } from "react";

export default class HoverCounter extends Component {
  state = {
    count: 0,
  };
  handleCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1 onMouseOver={this.handleCount}>Hovered {count} time</h1>
      </div>
    );
  }
}
