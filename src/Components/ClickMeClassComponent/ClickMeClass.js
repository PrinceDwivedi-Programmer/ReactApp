import React, { Component } from "react";

export default class ClickMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  clickHandle = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button className="btn btn-primary" onClick={this.clickHandle}>
          ClickMe
        </button>
      </div>
    );
  }
}
