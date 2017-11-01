import React, { Component } from 'react'

import Condition from "../condition"
import If_else from "../if_else"
import List from "../list"
import Form from "../form"
import One from "../one"
import Two from "../two"
import Slot from "../slot"
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
                name: "lisi",
                // data: 1,
                // objdata: {
                //     name: 1
                // }
            }
            //  console.log(this.handlefn)
            this.handlefn=this.handlefn.bind(this)
    }
    handlefn(i) {
            console.log(this)
            this.setState({
                name:i
            })
    }
    componentWillMount() {
        // console.log(this.handlefn)
    }
    render() {
        /*if(this.state.data==2){
           return (
          <div>
              <span>这里是首页</span>
              <Tab nameC={this.state.name}></Tab>
          
          </div>
        )
        }else{*/
        /* return ( <
                 div >
                 <
                 span className = "weather" > 这里是首页 < /span> <
                 span > { this.state.objdata.name } < /span>   <
                 Form > < /Form> < /
                 div >
             )*/
        /*}*/
/*       
        return (<div>
            <One fn={this.handlefn}></One>
            <span>{this.state.name}</span>
            <Two dataname={this.state.name}></Two>
        </div>)*/

// 内容分发
        // var $true=<Slot>
        //             <span>这里为true</span>
                  
        //         </Slot>
        // var $false=<Slot>
        //             <span>这里为false</span>
        //         </Slot>

        // return (

        //     <div>
        //        {this.state.state?$true:$false}
        //     </div>
        // )

        var one= <span>这里为true</span>
        var two=<span>这里为false</span>
        return (
            <div>
                <Slot one={one} two={two}></Slot>
            </div>
        )

    }
    componentDidMount() {
        // setTimeout(function(){
        //    this.setState({
        //     data:2
        //   })
        // }.bind(this),1000)

    }
}


export default Index