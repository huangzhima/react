import React, { Component } from 'react'

import { Carousel, WhiteSpace, WingBlank  } from 'antd-mobile';
import {Link} from "react-router"
import style from "../style.css"

class Banner extends Component{
  constructor(props){
    super(props)
      
  }
  render(){
  
    return (
           <div className={style.pro}>
              <div className={style.protit}>
                <img src="/img/tit.jpg" alt=""/>
              </div>
              <div className={style.prolist}>
                <div className={style.prolistleft}>
                  <img src="/img/pic1.jpg" alt=""/>
                </div>
                <div className={style.prolistright}>
                  <div><img src="/img/pic2.jpg" alt=""/></div>
                  <div><img src="/img/pic3.jpg" alt=""/></div>
                  <div><img src="/img/pic4.jpg" alt=""/></div>
                  <div><img src="/img/pic5.jpg" alt=""/></div>

                </div>
              </div>
            </div>
    );
   
  }
}





export default Banner
