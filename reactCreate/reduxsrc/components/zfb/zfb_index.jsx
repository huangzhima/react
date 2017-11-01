import React, { Component } from 'react'

// import {store,actions,actionType} from "../tool/index.js"

// import store from "../../tool/redux/redux.js"

import {add_c} from "../../tool/redux/zfb_m/actions.js"

class Child extends Component{
   constructor(props){
    
        super(props)
        const {dispatch}=this.props.prop
        this.dispatch=dispatch
        console.log(dispatch)
       
  }
 
  render(){
    return (
      <div>
          <button onClick={()=>{this.dispatch(add_c(5))}}>点击zfb</button>
      </div>
    )
  }
}
export default Child