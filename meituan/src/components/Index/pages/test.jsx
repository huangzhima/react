import React, { Component } from 'react'
import {reqBanner} from "../actions.js"

class Index extends Component{
  constructor(props){
    super(props)
    const {dispatch}=this.props.prop
    
    dispatch(reqBanner())
    // this.props.prop.dispatch()
  }

  render(){
    const {data,state}=this.props.prop.index.banner
    if(state=="start"){
       return (
        <div>
            正在请求数据
        </div>
      )
    }else if(state=="ok"){
         return (
            <div>
                请求成功数据为：
                <p>{data}</p>
            </div>
          )
    }else if(state=="error"){
       return (
        <div>
            请求失败
        </div>
      )
    }else{
         return (
          <div>
             未请求数据
          </div>
        )
    }
   
  }
}


export default Index
