import { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };
  handleCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    const { count } = this.state;
    // const { render } = this.props;
    // return render(count, this.handleCount);
    //another pattern
    const { children } = this.props;
    return children(count, this.handleCount);
  }
}
