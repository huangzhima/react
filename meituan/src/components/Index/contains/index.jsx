import React, { Component } from 'react'
import Banner from "../pages/banner.jsx"
import Search from "../pages/search.jsx"
import Nav from "../pages/nav.jsx"
import Homelist from "../pages/homelist.jsx"
import Project from "../pages/project.jsx"
import {reqDefault} from "../actions.js"
import { RefreshControl, ListView } from 'antd-mobile';
import SearchPage from "../pages/searchPage.jsx"
import Data from "../pages/data.jsx"
// foot
import {Foot,footDefault} from "../../common/foot/"

class Index extends Component{
  constructor(props){
    super(props)
    const {dispatch}=this.props
    // 数据请求
    dispatch(reqDefault())
    dispatch(footDefault())
 
  }

  render(){
   
    const {state:stateIndex,searchState}=this.props.index.default
   
    const {state:stateFoot}=this.props.foot.default
   
    if(stateIndex=="start"||stateFoot=="start"){
          return (
            <div>数据请求中</div>
          )
      }else if(stateIndex=="ok"&&stateFoot=="ok"){

        if(searchState){
            return <SearchPage prop={this.props}></SearchPage>


        }else{
          return (
            <div>
                <Search prop={this.props}></Search>
                <Banner prop={this.props}></Banner>
                <Nav prop={this.props}></Nav>
                <Homelist prop={this.props}></Homelist>
                <Project></Project>
                <Foot prop={this.props}></Foot>
                <Data prop={this.props}></Data>
            </div>  
          )
        }
        
      }else{
         return (
            <div>无数据请求</div>
          )
      }

    
  }
}


export default Index
