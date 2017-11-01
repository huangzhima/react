import React, { Component } from 'react'
import {stringifyQuery,withRouter } from "react-router"
class Tab extends Component {
      constructor(props){
        super(props)
        // console.log(this.props.location.query.name)
        // console.log(this.props.location.state.state)
        
        console.log(this.props.history)
        console.log(this.props)
        // this.props.history.go(-1)
        // this.props.history.push("/list")
        // console.log(stringifyQuery(this.props.location.query))
      
      }

      componentDidMount(){

        console.log(this.props)
         this.props.router.setRouteLeaveHook(
             this.props.route,
             this.routerWillLeave)

        
      }
       routerWillLeave(nextLocation) {
        // 返回 false 会继续停留当前页面，
        // 否则，返回一个字符串，会显示给用户，让其自己决定
          return '确认要离开？';
          // console.log(11111)
          // return false
      }

      render(){
        return (
          <div>
            <p>这里是tab切换页</p>
          </div>
        )
      }

}

export default withRouter(Tab)