import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                Navbar
                <Child></Child>
            </div>
        )
    }
}

const Child = () => <div>Child</div>

function Swiper() {
    return (
        <div>Swiper</div>
    )
}

const Tabbar = () => <div>Tabbar</div>

export default class App3 extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}
