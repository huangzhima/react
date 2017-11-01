import React, { Component } from 'react'
import Style from "./style.css"
export default{
  dom(){
    return <div>{this.form()}<p>{this.state.name.val}{this.state.age.val}</p></div>
  },
  form(){
      return <ul>
          <li>
              <label htmlFor="name">姓名:</label>
              <input type="text" data-model="name" id="name" onBlur={this.type}/>  
          </li>
          <li>
              <label htmlFor="age">年龄:</label>
              <input type="text" data-model="age"  id="age" onBlur={this.type}/>  
          </li>
           <li>
              <label htmlFor="area">地区:</label>
              <select name="select" type="text" value={this.state.select} onChange={this.changeFn}  id="area"> 
                <option value="北京">北京</option>  
                <option value="上海">上海</option>  
                <option value="广州">广州</option>  
            </select>

          </li>
          <li>
             
                {this.mapCheck()}
               
          </li>
          <li><button onClick={this.submit}>提交</button></li>
        </ul>
  },
  mapCheck(){
       var $ele=this.state.love.map((i,index)=>{
          return  <div key={index}><label htmlFor={i.enname}>{i.cnname}</label>
               <input name={index} type="checkbox" id={i.enname}  checked={i.checked} onChange={this.changeFn}/></div>
      })
      return $ele
  }
  
}

