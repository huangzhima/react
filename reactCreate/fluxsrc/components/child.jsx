import React, { Component } from 'react'
// import {actions} from "../tool/handleFlux.js"
import {actions} from "../tool/Flux.js"
class Child extends Component{
   constructor(props){
        super(props)
  }
  render(){
    return (
      <div>
          <button onClick={actions.add_c}>点击</button>
      </div>
    )
  }
}
export default Child