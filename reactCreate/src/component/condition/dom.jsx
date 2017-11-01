import React, { Component } from 'react'
import {default as style} from "./css.js"
import Style from "./style.css"
export default{
  dom(){
     if(true){
      return (
            <p>子dom节点</p>
      )
    }
  },
  // 
  weather(){
     var ele;
     
    //  ele=<div><button onClick={this.fn}>点击</button><span>哈哈</span>{this.state.state&&<p>天气真好</p>}</div>
      ele=<div><img src="/timg.jpg" alt="" className={Style.img}/><span className={Style.all}>全局con</span><button onClick={this.fn} className={Style.title}>点击</button>{this.state.state?<p>天气真好</p>:<p>天气不好</p>}</div>
      return ele
  }
}

