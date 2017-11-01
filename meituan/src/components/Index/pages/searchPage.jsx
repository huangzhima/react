import React, { Component } from 'react'

import { SearchBar  } from 'antd-mobile';

import style from "../index.css"
import {searchData,searchState} from "../actions"
class SearchPage extends Component{
  constructor(props){
    super(props)
      this.state={
        value:"请输入内容"
      }
      this.dispatch=this.props.prop.dispatch
      this.onChange=this.onChange.bind(this)
      this.focusfn=this.focusfn.bind(this)
  }
    onChange(e){
      this.setState({
        value:e
      })
    }
     focusfn(e){
      
      this.setState({
        value:""
      })
    }
  render(){
   
    return (
        <div style={{height:"100%",width:"100%"}}>
            <SearchBar
              value={this.state.value}
              placeholder="搜索"
              onSubmit={value => console.log(value, 'onSubmit')}
              onClear={value => console.log(value, 'onClear')}
              onFocus={() =>{this.focusfn()}}
              onBlur={(e) =>{this.dispatch(searchData(this.state.value))}}
              onCancel={() =>{ this.dispatch(searchState())} }
              showCancelButton
              onChange={this.onChange}
            />
        </div>
    );
   
  }
}





export default SearchPage