import React, { Component } from 'react'

import {reqAJAX} from "../actions.js"

import style from "../style.css"
import {    
 R_SENDCODEOK,      //获取验证码成功
 R_SENDCODEERROR,   //获取验证码失败
} from "../actionsTypes.js"
class Phone extends Component{
  constructor(props){
    super(props)
      this.state={
        val:"",
        btncls:"fsyzmdis",
        btn:true,
        xy:true
      }
     
  }
  
  inputPhone(e){
      this.setState({
           val:e.target.value,
        })
      if(/^1[34578]\d{9}$/.test(e.target.value)&&this.state.xy){
        this.setState({
           val:e.target.value,
           btncls:"fsyzm",
            btn:false
        })
      }
  }
  btnToNext(){
       this.setState({
          btn:true,
           btncls:"fsyzmdis",
        })
        // 发起ajax请求
        this.props.prop.dispatch(reqAJAX("/getCode",{ok:R_SENDCODEOK,error:R_SENDCODEERROR},this.state.val))
        this.setState({
            val:""
        })
  }
  chefn(){
    this.setState({
      xy:!this.state.xy
    })
      
    if(/^1[34578]\d{9}$/.test(this.state.val)&&!this.state.xy){
       
        this.setState({
           btncls:"fsyzm",
            btn:false
        })
      }
  }
  render(){
        if(this.props.prop.register.default.code){
          var $el= <p style={{color:"red"}}>发送验证码失败</p>
        }else{
          var $el=null
        }
    return (
          <form className={style.telform}>
            <input type="text" className={style.telinp} value={this.state.val} onChange={this.inputPhone.bind(this)} onKeyUp={this.inputPhone.bind(this)}/>
            
              {$el}
            <button className={style[this.state.btncls]} disabled={this.state.btn} onClick={this.btnToNext.bind(this)}>发送验证码</button>
            <div className={style.xy}><input onChange={this.chefn.bind(this)}  type="checkbox" id="ckxy" checked={this.state.xy}/><label htmlFor="ckxy">我已阅读并同意<a href="javascript:;">《美团网用户协议》</a></label></div>
          </form>

    );
   
  }
}





export default Phone
