import React, { Component } from 'react'

class Index extends Component {
      constructor(props){
        super(props)
      }
      render(){
        
        let {left1,left2}=this.props
       
        return (
          <div>
            <p>这里是中心也</p>
            {this.props.children}
            {this.props.location.state&&this.props.location.state.state=="left1"?left1:left2}
          </div>
        )
      }

}

export default Index