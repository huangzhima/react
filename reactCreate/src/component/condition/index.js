import React, { Component } from 'react'

import { default as dom } from "./dom.jsx"
import { default as event } from "./event.js"
// import "./css/if_else.css"
class Condition extends Component {
    constructor(props) {
        super(props)
        this.state = {
                state: true
            }
            // 事件
        this.domFn = event.dom.bind(this)
        this.weatherFn = event.weather.bind(this)
        this.fn = event.fn.bind(this)

        // 一下为dom
        this.dom = dom.dom.bind(this)
        this.weather = dom.weather.bind(this)
    }
    render() {
        console.log(11)
        return ( <
            div > { this.weather() } < /div>
        )
    }
    componentDidMount() {

    }
}


export default Condition