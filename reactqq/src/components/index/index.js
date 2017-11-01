import React, { Component } from 'react'
import Dom from "./dom.jsx"

class Index extends Component {
    constructor() {
        super()
        this.Dom = Dom.dom.bind(this)
    }
    render() {
        return this.Dom()
    }


}
export default Index