import React, { Component } from "react";

export default class ClickCounter extends Component {
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
        <button onClick={this.handleCount}>Clicked {count} Time</button>
      </div>
    );
  }
}
