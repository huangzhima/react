import React, { Component } from 'react'
import reactDom from "react-dom"
import { Router, Route, Link,IndexRoute,browserHistory,hashHistory} from 'react-router'
import Index from "./components/index.jsx"
import List from "./components/list.jsx"
import Tab from "./components/tab.jsx"
import Center from "./components/center.jsx"
import Left from "./components/left.jsx"
import Aside from "./components/aside.jsx"

import Left1 from "./components/left/left1.jsx"
import Left2 from "./components/left/left2.jsx"



var enter=function(next,replace,callback){
    console.log(next)
    console.log(replace)
    replace("/tab")
    console.log(callback)
}

let getTab=(location,cb)=>{
    require.ensure([],(require)=>{
            cb(null,require("../routeSrc/components/tab.jsx").default)
    },"tab")
}

let fn=()=>{
    console.log("sdfs")
}

reactDom.render(
    (
      <Router history={hashHistory}  >
        <Route path='/' component={Index} >
            <IndexRoute component={Aside}/>
            <Route path='list/:id' component={List}  />
            <Route path='tab' getComponent={getTab} onEnter={fn}/>
            <Route path='center' component={Center}>
                
                   <Route path="left" components={{left1:Left1,left2:Left2}}></Route>
            </Route>
             <Route path='aside' component={Aside}/>
             

        </Route>
      </Router>
    ), document.getElementById("app"))

// let routes=[{
//     path:"/",
//     component:Index,
      
//     childRoutes:[
//       {
//         path:"list",
//         component:List
//       },
//        {
//         path:"tab",
//         component:Tab
//       },
//       {
//         path:"center",
//         component:Center,
//         childRoutes:[
//           {
//             path:"left",
//             component:Left
//           }
//         ]
//       }
//     ]
// }]


// reactDom.render((<Router history={hashHistory} routes={routes} />),document.getElementById("app"))