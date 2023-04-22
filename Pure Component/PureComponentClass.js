import React from "react";

class PureComponentClass extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  render() {
    {
      console.log("inside class component");
    }
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button
          style={{ padding: "2px", width: "5rem" }}
          onClick={() => this.setState({ counter: 0 })}
        >
          ADD
        </button>
      </div>
    );
  }
}

export default PureComponentClass;
