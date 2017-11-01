import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { Provider } from "react-redux"


import router from "./router/index.js"
import store from "./store"

// 引入全局的antd的样式
// import 'antd-mobile/dist/antd-mobile.css';
import 'antd/dist/antd.css';

ReactDOM.render( 
    <Provider store = { store } > 
        { router } 
    </Provider> ,
    document.getElementById('app')
);