import React, { Component } from 'react'
import Style from "./style.css"
export default{
  dom(){
    return <div><span>one</span><button onClick={()=>this.fn(this.state.name)}>点击</button></div>
  },
 
}

