import React, { Component } from 'react'

// var Test=React.createClass({
//   getInitialState:function(){
//     console.log("getInitalState")
//     return {
//       name:"zhangsan",
//       data:this.props.data
//     }
//   },
//   getDefaultProps(){
//     console.log("getDefaultProps")
//     return {
//       data:1
//     }
//   },
//   componentWillMount(){
//     console.log("componentWillMount")
//   },
//   render(){
//     console.log("render")
//     return (<div>{this.state.name}</div>)
//   },
//   componentDidMount(){
//     console.log("componentDidMount")
//   }

// })

class Test extends Component{
    static defaultProps={
        data:"111"
    }
    constructor(props){
      console.log("constructor")
      super(props)
      this.state={
        data:this.props.data,
        name:"zhangsan",
        time:null
      }
    }
    render(){
      console.log("render")
      return (
        <div>{this.state.name}-{this.state.data}</div>
      )
    }
    componentWillMount(){
        console.log("componentWillMount")
        //  this.setState({
        //   name:"lisi"
        // })
    }
    componentDidMount(){
      // this.setState({
      //   name:"lisi"
      // })
      console.log("componentDidMount")
      var time=setTimeout(function(){
        // this.forceUpdate()
        this.setState({
          name:"zhang"
        })
      }.bind(this),1000)
      this.setState({time:time})
    }
    componentWillReceiveProps(news){
      console.log(news)
      this.setState({
        data:news.data
      })
      console.log(this.props.data)
      console.log("componentWillReceiveProps")
    }
    shouldComponentUpdate(nextprops,nextstates){
        console.log(nextprops,nextstates)
        console.log("shouldComponentUpdate")
        if(nextstates.name!==this.state.name){
          return true
        }else{
          return false
        }
        // if(nextprops.data!==this.props.data){
        //   return true
        // }else{
        //   return false
        // }
        
    }
    componentWillUpdate(){
        console.log("componentWillUpdate")
    }
     componentDidUpdate(){
       console.log("componentDidUpdate")
    }
    componentWillUnmount(){
      console.log("componentWillUnmount")
      clearTimeout(this.state.time)
    }

}
// Test.defaultProps={
//   data:1
// }

export default Test