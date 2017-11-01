import React, { Component } from 'react'
import Style from "./style.css"
export default{
  dom(){
       
    return  this.state.list.map((i,index)=>{

        return <li key={i}>{i}</li>
      })
  },
  dom2(){
       
    return  this.state.list.map((i,index)=>{

        return <li key={i}>{i}</li>
      })
  },
 
}

