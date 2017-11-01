import { createStore, combineReducers, applyMiddleware } from "redux"
// 引入异步请求的中间件
import thunkMiddleware from 'redux-thunk'

import { IndexReducer } from "./components/Index/"
import { footReducer } from "./components/common/foot/"

import {RegisterReducer} from "./components/register/"
import {LoginReducer} from "./components/login/"

// 整个store数据管理中心的配置，整合reducer
const reducerApp = combineReducers({
    index: IndexReducer,
    foot:footReducer,
    register:RegisterReducer,
    login:LoginReducer
})

// 创建数据管理中心，store
export default new createStore(reducerApp, applyMiddleware(thunkMiddleware))