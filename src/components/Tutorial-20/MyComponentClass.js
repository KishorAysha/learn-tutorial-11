import React, { Component } from "react";

export default class MyComponentClass extends Component {
  state = {
    count: 0,
    date: new Date(),
  };

  componentDidMount() {
    const { count } = this.state;
    document.title = `Clicked ${count} time`;
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("Will unmount");
  }
  componentDidUpdate() {
    const { count } = this.state;
    document.title = `Clicked ${count} time`;
  }
  addCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };
  render() {
    const { date } = this.state;
    console.log("Return to Home");
    return (
      <div>
        <p>Time: {date.toLocaleTimeString()}</p>
        <button type="button" onClick={this.addCount}>
          Click
        </button>
      </div>
    );
  }
}
