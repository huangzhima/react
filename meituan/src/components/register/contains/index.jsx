import React, { Component } from 'react'
import Phone from "../pages/inputPhone.jsx"
import Code from "../pages/inputCode.jsx"
import PS from "../pages/inputPS.jsx"

import {reqDefault} from "../actions.js"
import style from "../style.css"
class Register extends Component{
  constructor(props){
    super(props)
    const {dispatch}=this.props
   
  }
  componentDidUpdate(){
    console.log(this.props.register.default)
  }
  render(){
      const {state}=this.props.register.default

        if(state=="phone"){
         var $el= <div>
           <div className={style.zclc}>
                <p className={style.zheliu} style={{color:"green"}}>输入手机号</p>
                <i className="icon-angle-right iconfont"></i>
                <p >2输入验证码</p>
                <i className="icon-angle-right iconfont"></i>
                <p>3设置密码</p>
			        </div>
              <Phone prop={this.props}></Phone>
         
         </div>
             
        }else if(state=="code"){
           var $el= 
           <div>  
            <div className={style.zclc}>
                <p className={style.zheliu} style={{color:"green"}}>输入手机号</p>
                <i className="icon-angle-right iconfont"></i>
                <p style={{color:"green"}}>2输入验证码</p>
                <i className="icon-angle-right iconfont"></i>
                <p>3设置密码</p>
			        </div>
              <Code prop={this.props}></Code>
           </div> 
           
        }else{
            var $el= 
           <div>  
            <div className={style.zclc}>
                <p className={style.zheliu} style={{color:"green"}}>输入手机号</p>
                <i className="icon-angle-right iconfont"></i>
                <p style={{color:"green"}}>2输入验证码</p>
                <i className="icon-angle-right iconfont"></i>
                <p>3设置密码</p>
			        </div>
            <PS  prop={this.props}></PS>
           </div> 
        }

        return (<div className={style.zhuce}>
              <p className={style.zhucetit}>
                注册
              </p>
              
                {$el}
              </div>)

    
  }
}


export default Register
