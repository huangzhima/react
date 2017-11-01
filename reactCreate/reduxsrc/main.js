import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { connect, Provider } from "react-redux"
import store from "./tool/redux/redux.js"

import Index from "./components/index.jsx"
const select=(state)=>{
    return Object.assign({},state)
}

const Main=connect(

 select

)(Index)


ReactDOM.render(
    <Provider store={store}>
        <Main / >      
    </Provider> ,
    document.getElementById('app')
);


