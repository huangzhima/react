import React, { Component } from 'react'

class Tab extends Component{
  constructor(props){
    super(props)
       console.log(this.props.nameC)
  }
  render(){
    return (
      <div>这里是tab页面{this.props.nameC}</div>
    )
  }
}

export default Tab