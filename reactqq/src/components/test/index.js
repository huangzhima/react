import React, { Component } from 'react'
import Dom from "./dom.jsx"
import Event from "./event"
class Test extends Component {
    constructor() {
        super()

        this.Dom = Dom.dom.bind(this)
            // 事件与数据
        this.Data = Event.data.bind(this)
        this.Fn = Event.fn.bind(this)


    }
    render() {
        return this.Dom()
            // return null
    }


}
export default Test