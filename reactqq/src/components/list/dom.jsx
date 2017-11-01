import React, { Component } from 'react'
import Style from "./css"
import style from "./style.css"
import Test from "../test"
export default{
  
  dom(){
    // let eles=this.Data().map((i,index)=>{
    //     return <li key={index}>{i.name}</li>
    //   })

    // let ele=<ul style={Style.ul}>
    //    {this.Data().map((i,index)=>{
    //     return <li key={index} style={Style.li}><img src={i.img} alt="" style={Style.liimg}/><span>{i.name}</span><span>{i.time}</span></li>
    //   })}
    //   </ul>
    let ele=<div><Test></Test><p>{this.state.name}</p><span className={style.title}>天气真好</span></div>
    return ele
  }
}