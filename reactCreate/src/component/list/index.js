import React, { Component } from 'react'

import { default as dom } from "./dom.jsx"
import { default as event } from "./event.js"
// import "./css/if_else.css"
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
                list: [1, 2, 3, 4, 5]
            }
            // 事件

            this.sortfn=event.sortfn.bind(this)
        // 一下为dom
        this.dom = dom.dom.bind(this)
        this.dom2 = dom.dom2.bind(this)

    }
    render() {
        return ( <div>
                <button onClick={()=>this.sortfn()}>点击</button>
                < ul > { this.dom() } {this.dom2()}</ul>
        </div>
           
        )

    }
    componentDidMount() {

    }
}


export default List