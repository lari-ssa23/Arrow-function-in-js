import React, { Component } from "react";

export default class Arrow extends Component {
  msg = () => {
    return <h2>O conhecimento liberta</h2>;
  };
  dobro = (x) => {
    return 2 * x;
  };
  render() {
    return (
      <div>
        {this.msg()}
        <h1>{this.dobro(23)}</h1>
      </div>
    );
  }
}
