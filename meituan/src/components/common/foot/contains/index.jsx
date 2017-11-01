import React, { Component } from 'react'
import style from "../style.css"
import {Link} from "react-router"
class Foot extends Component{
  constructor(props){
    super(props)

  
  }

  render(){
      const {data}=this.props.prop.foot.default
      console.log(data)
      const $el=data.list.map((i,index)=>{
        return <Link key={index} to="/home" activeStyle={{color:"#11bdb1"}}><img style={{width:"80%",height:"0.7rem",borderRadius:"50%"}} src={i.img} alt=""/>{i.text}</Link>
      })

   return (
      
           <footer className={style.footer} style={{height:"50px"}}>
              {$el}
          </footer>
      
       

    
   )

    
  }
}


export default Foot
