import React, { Component } from 'react'

export default class App8 extends Component {
  state = {
    list: [
      {
        id: 1,
        text: '111'
      },
      {
        id: 2,
        text: '222'
      },
      {
        id: 3,
        text: '333'
      }
    ]
  }
  render() {
    const newList = this.state.list.map(item => <li key={item.id}>{item.text}</li>)
    return (
      <div>
        <ul>
          {newList}
        </ul>
      </div>
    )
  }
}
