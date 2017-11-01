import React, { Component } from 'react'
import {reqAJAX} from "../actions.js"


import style from "../style.css"
import {    
 R_CODEOK,      //验证验证码成功
 R_CODEERROR,   //验证验证码失败
} from "../actionsTypes.js"
class Banner extends Component{
  constructor(props){
    super(props)
      this.state={
        code:"",
        num:0,
       
      }
      this.dispatch=this.props.prop.dispatch
  }
 
  fn(e){
   
         if(e.keyCode=="8"){
            this.setState({
              num:this.state.num-1,
              code:this.state.code.substring(0,this.state.num-1)
            },()=>{
              console.log(this.state.code)
                this.refs[this.state.num].value=""
                this.refs[this.state.num].focus()
            })
            
          
        }else{
            if(this.state.num<5){
            this.refs[this.state.num+1].focus()
            this.setState({
              num:this.state.num+1,
              code:this.state.code+e.target.value
            })
            }else{
                this.setState({
                  code:this.state.code+e.target.value
                },()=>{
                  // 发起ajax
                  this.dispatch(reqAJAX("/yzCode?code="+this.state.code,{ok:R_CODEOK,error:R_CODEERROR}))
                })
              
                
            }  
    }
  }
  
  render(){
        var $el=[]
        for (var i=0;i<6;i++){
            $el.push(<input type="text" maxLength="1" className={style.inyz} onKeyUp={this.fn.bind(this)} ref={i} key={i}/>)
        }
    return (
          <div className={style.zctCon}>
				<p>短信已下发至{this.props.prop.register.default.phone

}</p>
				<div className={style.yzm}>
            {$el}
				
				</div>
				<div className={style.zcta}>
				<a href="javascript:;">使用账号密码登陆</a>
				<a href="javascript:;">收不到验证码</a>
			</div>
			</div>

    );
   
  }
}





export default Banner
