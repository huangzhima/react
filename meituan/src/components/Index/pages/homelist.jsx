import React, { Component } from 'react'

import { Carousel, WhiteSpace, WingBlank  } from 'antd-mobile';
import {Link} from "react-router"
import style from "../style.css"

class Banner extends Component{
  constructor(props){
    super(props)
      
  }
  render(){
    const {homlitlist}=this.props.prop.index.default
   	var litnav=homlitlist.map(function(i,index){
				return (<a href="javascript:;" key={index}><i className={"iconfont "+i.icon} style={{background:i.back}}></i>{i.nam}</a>)
		})
    return (
           <div className={style.homelit}>
					{litnav}
				</div>
    );
   
  }
}





export default Banner
