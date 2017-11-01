import React, { Component } from 'react'

class List extends Component {
      constructor(props){
        super(props)
         console.log(this.props.params)
      }
      componentDidMount(){
       
      }
      render(){
        return (
          <div>
            <p>这里是列表页</p>
            <span>{this.props.params.id}</span>
          </div>
        )
      }

}

export default List