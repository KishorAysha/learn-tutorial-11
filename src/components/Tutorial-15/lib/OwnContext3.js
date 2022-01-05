class Context {
  constructor(value) {
    this.value = value;
  }

  // Provider
  Provider = ({ children, value }) => {
    this.value = value;
    return children;
  };
  //Consumer
  Consumer = ({ children }) => {
    return children(this.value);
  };
}

const createContext = (value = null) => {
  const context = new Context(value);
  return {
    Provider: context.Provider,
    Consumer: context.Consumer,
  };
};

export default createContext;
