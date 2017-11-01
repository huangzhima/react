import React, { Component } from 'react'

import { default as dom } from "./if_elsedom.jsx"
import { default as event } from "./if_elseEvent.jsx"
// import "./css/if_else.css"
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
                state: true
            }
            // 事件
        this.domFn = event.dom.bind(this)
        this.weatherFn = event.weather.bind(this)

        // 一下为dom
        this.dom = dom.dom.bind(this)
        this.weather = dom.weather.bind(this)
    }
    handlefn(i) {
        this.setState({
            state: !this.state.state
        })
    }
    componentWillMount() {

        }
        // render(){

    //   if(this.state.state){
    //     return (<div>
    //       <button onClick={()=>this.handlefn()}>点击</button>

    //       <span>天气真好</span>
    //     </div>)
    //   }else{
    //    return (<div>
    //       <button onClick={()=>this.handlefn()}>点击</button>
    //       <span>天气不好</span>
    //     </div>)
    //   }

    // }
    // dom(){
    //    if(true){
    //     return (
    //           <p>子dom节点</p>
    //     )
    //   }
    // }
    // // 
    // weather(){
    //    var ele;
    //    if(this.state.state){
    //       ele=<div><button onClick={()=>this.handlefn()}>点击</button>
    //       {this.dom()}
    //       <span>天气真好</span>
    //       </div>

    //     }else{
    //       ele=<div><button onClick={()=>this.handlefn()}>点击</button><span>天气不好</span></div>
    //     }
    //     return ele
    // }

    render() {
        return ( <
            div > { this.weather() } < /div>
        )

    }
    componentDidMount() {

    }
}


export default Index