import React, { Component } from 'react'

import {InputItem, Button,Toast } from 'antd-mobile';

import { createForm } from 'rc-form';
import {reqAJAX} from "../actions.js"
import style from "../index.css"
import {    
 R_SENDPSOK,      ////发送密码成功
 R_SENDPSERROR,   //获取密码失败
} from "../actionsTypes.js"
class PS extends Component{
  constructor(props){
    super(props)
      this.state={
          value:"",
          hasError: false,
      }
  }
   onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('请输入正确格式密码');
    }
  }
  onChange(value){
      if (/^[A-Za-z0-9]{6,16}$/.test(value)) {
        this.setState({
          hasError: false,
        });
      } else {
        this.setState({
          hasError: true,
        });
      }
      this.setState({
        value,
      });
  }
  submitfn(){
    if(!this.state.hasError){
        console.log(this.state.value)
          this.props.prop.dispatch(reqAJAX("/sendPS?password="+this.state.value,{ok:R_SENDPSOK,error:R_SENDPSERROR}))
    }else{
        Toast.info('请输入正确格式密码');
    }
  }
  render(){
    const { getFieldProps } = this.props.form;
    return (
          <div>
              <InputItem
            type="password"
            placeholder="6-16位字母加数字"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick.bind(this)}
            onChange={this.onChange.bind(this)}
            value={this.state.value}
          >密码</InputItem>
            <Button className="btn" type="primary" onClick={this.submitfn.bind(this)}>提交</Button>
          </div>
    );
   
  }
}


const H5NumberInputExampleWrapper = createForm()(PS);


export default H5NumberInputExampleWrapper
