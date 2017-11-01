import React, { Component } from 'react'

import { default as dom } from "./dom.jsx"
import { default as event } from "./event.js"
import store from "../../tool/storeEvent"
// import "./css/if_else.css"
class Slot extends Component {
    constructor(props) {
        super(props)
        console.log(111)
        this.state = {
                // name: this.props.dataname
                name: "maliu"
            }
            // 事件

        this.fntwo = event.fntwo.bind(this)

        // 一下为dom
        this.dom = dom.dom.bind(this)


    }
    render() {
        return this.dom()
    }
    componentDidMount() {
        store.$on("up", function(data) {
            console.log(data)
            this.setState({
                name: data
            })
        }.bind(this))
        store.$on("up", function() {
            console.log("第二次")
        })
    }
}


export default Slot