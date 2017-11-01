import React, { Component } from 'react'
import Style from "./css"
import style from "./style.css"
export default{
  
  dom(){
    let ele=<div><button onClick={this.Fn}>点击</button><span className={style.title}>这里是test页面</span></div>
    return ele
  }
}