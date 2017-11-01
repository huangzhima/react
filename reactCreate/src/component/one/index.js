import React, { Component } from 'react'

import { default as dom } from "./dom.jsx"
import { default as event } from "./event.js"
import store from "../../tool/storeEvent"
// import "./css/if_else.css"
class One extends Component {
    constructor(props) {
        super(props)
        this.state = {
                name: "zhangsan"
            }
            // 事件

        this.fnone = event.fnone.bind(this)

        this.upfn = this.props.fn

        // 一下为dom
        this.dom = dom.dom.bind(this)

    }
    fn() {
        store.$emit("up", this.state.name)
    }
    render() {
        return this.dom()
    }

}


export default One