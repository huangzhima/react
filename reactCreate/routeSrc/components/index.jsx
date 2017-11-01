import React, { Component } from 'react'
import {Link,stringifyQuery} from "react-router"
import style from "../common.css"
class Index extends Component {
      constructor(props){
        super(props)
        this.state={
          obj:{
            name:1
          }
        }

      }
      componentDidMount(){
        
      }
      fn(e){
        e.preventDefault()
        console.log("fdsf")
      }
      render(){
        
        return (
          <div>
            <Link to="/list/123">list</Link>
            <Link to="/tab"  query={{name:1}} state={{state:"one"}} activeClassName={style.red} >tab</Link>
            <Link to="/center">center</Link>
            <Link to="/center/left" state={{state:"left2"}}>left</Link>
           
            {this.props.children}
          </div>
        )
      }

}

export default Index