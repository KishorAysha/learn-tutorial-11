import { Component } from "react";

export default class Counter2 extends Component {
  state = {
    count: 0,
  };
  handleCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    const { count } = this.state;
    const { children } = this.props;
    return children(count, this.handleCount);
  }
}
