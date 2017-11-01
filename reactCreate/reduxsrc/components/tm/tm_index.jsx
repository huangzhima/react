import React, { Component } from 'react'

// import {store,actions,actionType} from "../tool/index.js"
// import {add_c} from "../../tool/redux/tm_m/actions.js"
// import store from "../../tool/redux/redux.js"

class Child extends Component{
   constructor(props){
        super(props)

  }
  handle(){
    
    store.dispatch(add_c(6))
  }
  render(){
    return (
      <div>
          <button onClick={()=>{this.props.fn(3)}}>点击Tm</button>
      </div>
    )
  }
}
export default Child