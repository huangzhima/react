import React, { Component } from 'react'
// import {store} from "../tool/index.js"


import store from "../tool/redux/redux.js"
import Tm_index from "./tm/tm_index.jsx"
import Zfb_index from "./zfb/zfb_index.jsx"


import {add_c} from "../tool/redux/tm_m/actions.js"
// import Child from "./child.jsx"
class Index extends Component{
  constructor(props){
        super(props)
        console.log(this.props)
        // this.listenfn=this.listenfn.bind(this)
        // console.log(store.getState())
        // this.state={
        //   tm:store.getState().tm.count,
        //   zfb:store.getState().zfb.num
        // }
        // store.subscribe(this.listenfn)
        
      
  }
  
  // listenfn(){
  //   this.setState({
  //      tm:store.getState().tm.count,
  //         zfb:store.getState().zfb.num
  //   })
  // }

  render(){
    return (
      <div>
          <p>{this.props.tm.count}</p>
          <p>{this.props.zfb.num}</p>
          <Tm_index fn={(text)=>{this.props.dispatch(add_c(text))}}></Tm_index>
          <Zfb_index prop={this.props}></Zfb_index>
      </div>
    )
  }
  componentWillUnmount(){
    store.unsubscribe(this.listenfn)
  }
}


export default Index