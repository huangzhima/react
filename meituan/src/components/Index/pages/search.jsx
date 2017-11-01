import React, { Component } from 'react'

import { Carousel, WhiteSpace, WingBlank  } from 'antd-mobile';

import style from "../index.css"
import {searchState} from "../actions"
class Banner extends Component{
  constructor(props){
    super(props)
      this.dispatch=this.props.prop.dispatch
  }
  render(){
    
    return (
           <div className={style.homeheader}>
              <a href="javascript:;">北京</a>
              <div className={style.homeheaderser}>
              <i className="iconfont icon-fangdajing"></i>
                <input type="text" placeholder="铁木真" onFocus={()=>{this.dispatch(searchState())}}/>
              </div>
              <a href="javascript:;"><i className="iconfont icon-youhuiquan-01"></i></a>
            </div>
    );
   
  }
}





export default Banner
