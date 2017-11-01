import React, { Component } from 'react'

import { Carousel, WhiteSpace, WingBlank  } from 'antd-mobile';
import {Link} from "react-router"
import style from "../style.css"

class Banner extends Component{
  constructor(props){
    super(props)
      
  }
  render(){
    const {nav}=this.props.prop.index.default
      var bignav=nav.map(function(i,index){
				return (<Link to={i.url} key={index}><i className={"iconfont "+i.icon} style={{background:i.back}}></i>{i.nam}</Link>)
		})
    return (
           <div className={style.homebig}>
              {bignav}
            </div>
    );
   
  }
}





export default Banner
