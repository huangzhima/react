import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Data extends Component{
    static defaultProps={
      objdata:1
    }
    static propTypes={
      objdata:PropTypes.number
    }
    constructor(props){
      super(props)
      console.log(typeof this.props.objdata)
      this.state={
        child:"child"
      }
    }
    componentDidMount(){
      console.log(this.props)
      this.props.handlefn(this.state.child)
    }
    render(){
      return (
        <div>{this.props.objdata}</div>
      )
    }
}

export default Data