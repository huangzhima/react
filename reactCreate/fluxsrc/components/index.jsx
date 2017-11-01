import React, { Component } from 'react'
import {state,event,getdata} from "../tool/Flux.js"
import Child from "./child.jsx"
class Index extends Component{
  constructor(props){
        super(props)
        // state.num++
        // getdata().num++
        this.state={
          num:getdata().num
        }
        event.$on("change",()=>{
          this.setState({
            num:getdata().num
          })
        })
  }
  render(){
    return (
      <div>
          <span>{this.state.num}</span>
          <Child></Child>
      </div>
    )
  }
}


export default Index