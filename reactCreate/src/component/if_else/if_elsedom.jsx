import React, { Component } from 'react'
import {default as style} from "./if_else.js"
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
     if(this.state.state){
        ele=<div><button onClick={()=>this.handlefn()}>点击</button>
        <button onClick={()=>this.domFn()}>点击2</button><span className={Style.all}>全局con</span>
        {this.dom()}
     
        <span style={style.weather}>天气真好</span>
        </div>
   
      }else{
        ele=<div><button onClick={()=>this.handlefn()} className={Style.title}>点击</button><span>天气不好</span></div>
      }
      return ele
  }
}

