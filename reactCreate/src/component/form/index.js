import React, { Component } from 'react'

import { default as dom } from "./dom.jsx"
import { default as event } from "./event.js"
// import "./css/if_else.css"
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
                name: {
                    name: "name",
                    reg: /^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$/,
                    val: "",
                    msg: "您输入的姓名格式不正确"
                },
                age: {
                    name: "age",
                    reg: /^[0-9]*$/,
                    val: "",
                    msg: "您输入的年龄格式不正确"
                },
                select: "上海",
                love: [{ cnname: "篮球", enname: "ball", checked: true }, { cnname: "唱歌", enname: "sing", checked: true }]
            }
            // 事件

        this.formHandle = event.formHandle.bind(this)
        this.type = event.type.bind(this)
        this.submit = event.submit.bind(this)
        this.changeFn = event.changeFn.bind(this)

        // 一下为dom
        this.dom = dom.dom.bind(this)
        this.form = dom.form.bind(this)
        this.mapCheck = dom.mapCheck.bind(this)

    }
    render() {
        return this.dom()
    }
    componentDidMount() {

    }
}


export default List