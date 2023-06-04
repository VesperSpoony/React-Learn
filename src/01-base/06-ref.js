import React, { Component } from "react";

export default class App6 extends Component {
  myRef = React.createRef();

  render() {
    return (
      <div>
        <input ref="mytext" />
        <button
          onClick={() => {
            console.log("click1", this.refs.mytext.value);
          }}
        >
          add1
        </button>

        <input ref={this.myRef} />
        <button
          onClick={() => {
            console.log("click1", this.myRef.current.value);
          }}
        >
          add2
        </button>
      </div>
    );
  }
}
