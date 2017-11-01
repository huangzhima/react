import React, { Component } from 'react'

import {store,actions,actionType} from "../tool/index.js"

class Child extends Component{
   constructor(props){
        super(props)

  }
  handle(){
    
    store.dispatch(actions.add_fn())
  }
  render(){
    return (
      <div>
          <button onClick={()=>{this.handle()}}>点击</button>
      </div>
    )
  }
}
export default Child