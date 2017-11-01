import React, { Component } from 'react'
import Style from "./style.css"
export default{
  // dom(){
  //   return <div>   
  //    <p>  这里是子组件</p>
  //       {this.props.children}
  //   </div>
  // },
   dom(){
    return <div>   
     <p>  这里是子组件</p>
        {this.state.state?this.props.one:this.props.two}
    </div>
  },
 
  
}

