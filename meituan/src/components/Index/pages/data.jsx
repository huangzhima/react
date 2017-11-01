import React, { Component } from 'react'

import { Carousel, WhiteSpace, WingBlank  } from 'antd-mobile';

import style from "../index.css"

class Banner extends Component{
  constructor(props){
    super(props)
      
  }
 

  render(){
    const {data=[],state}=this.props.prop.index.default
   
    const list=data.map((i,index)=>{
        return <div className="v-item" className={style.bannerI} key={index}>
                {i.name}
                </div>
    })
    return (
           <div>
                {list}
           </div>
    );
   
  }
}





export default Banner
