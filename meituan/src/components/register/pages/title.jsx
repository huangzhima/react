import React, { Component } from 'react'

import { Carousel, WhiteSpace, WingBlank  } from 'antd-mobile';


import style from "../index.css"

class Banner extends Component{
  constructor(props){
    super(props)
      
  }
  beforeChange(from, to){
   
  }
  afterChange(from, to){
   
  }
  render(){
    const {banner=[],state}=this.props.prop.index.default
    const list=banner.map((i,index)=>{
        return <div className="v-item" className={style.bannerI} key={index}>
                <img src={i.img} alt="" />
                </div>
    })
    return (
           <WingBlank style={{margin:0}}>
            <Carousel
              className="my-carousel"
              autoplay={true}
              infinite
              selectedIndex={1}
              swipeSpeed={35}
              beforeChange={(from, to) => {this.beforeChange(from, to)}}
              afterChange={(from, to) => {this.afterChange(from, to)}}
            >
                {list}
            </Carousel>
       </WingBlank>
    );
   
  }
}
export default Banner
