import React, { Component } from "react";

export default class App52 extends Component {
  a = 1000;
  render() {
    return (
      <div>
        <input />
        <button
          onClick={() => {
            console.log("click1", this.a);
          }}
        >
          add1
        </button>
        <button onClick={this.handleClick2.bind(this)}>add2</button>
        <button onClick={this.handleClick3}>add3</button>
        <button
          onClick={() => {
            this.handleClick4();
          }}
        >
          add3
        </button>
      </div>
      // React不会真正地绑定事件到每一个具体元素上，而是采用事件代理的模式
    );
  }

  handleClick2() {
    console.log("click2", this.a);
  }

  handleClick3 = (e) => {
    console.log("click3", this.a, e);
  };

  handleClick4 = () => {
    console.log("click4", this.a);
  };
}
