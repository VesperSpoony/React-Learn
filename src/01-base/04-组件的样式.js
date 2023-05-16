import React, { Component } from 'react'

import './css/04-组件的样式.css'

export default class App4 extends Component {
    render() {
        const name = "Vesper";
        const obj = {
            backgroundColor: "yellow",
            fontSize: "30px"
        }
        return (
            <div>
                {10 + 20}-{name}

                <div style={obj}>STYLE</div>
                <div style={{ backgroundColor: "red" }}>style</div>
                <div className="active">style.css</div>

                <label htmlFor="username">用户名：</label>
                <input type='text' id='username' />
            </div>
        )
    }
}
