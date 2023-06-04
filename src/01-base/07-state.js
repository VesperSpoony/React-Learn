import React, { Component } from "react";

export default class App7 extends Component {
  // state = {
  //   myShow: true
  // }

  constructor() {
    super();
    this.state = {
      myShow: true,
      myText: 'before'
    }
  }

  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <button onClick={() => {
          this.setState({
            myShow: !this.state.myShow,
            myText: this.state.myText === 'before' ? 'after' : 'before'
          })
          if (this.state.myShow) {
            console.log("收藏的逻辑");
          } else {
            console.log("取消的逻辑");
          }
        }}>{this.state.myShow ? '收藏' : '取消收藏'}</button>
        <div>{this.state.myText}</div>
      </div >
    )
  }
}
