import React, { Component } from 'react'
import storeEvent from "../../tool/storeEvent"
import Dom from "./dom.jsx"
import Event from "./event"
class List extends Component {
    constructor() {
        super()

        this.state = {
                name: "zhangsan"
            }
            // 事件与数据
        this.Data = Event.data.bind(this)
        console.log(this.Data())
        this.Dom = Dom.dom.bind(this)
    }
    render() {
        return this.Dom()
            // return null
    }
    componentDidMount() {
        storeEvent.on("up", function(data) {
            console.log(data)
            this.setState({
                name: data
            })
        }.bind(this))
    }

}
export default List