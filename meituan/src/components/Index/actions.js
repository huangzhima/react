import { I_SENDSTART, I_SENDOK, I_SENDERROR,I_SEARCHSTATE,I_SEARCHDATA } from "./actionsTypes"
import {reqDefault as footreq} from "../common/foot/actions.js"
export const actionStart = () => {
    return {
        type: I_SENDSTART
    }
}

export const actionOk = (text) => {
    return {
        type: I_SENDOK,
        text: text
    }
}
export const actionError = () => {
    return {
        type: I_SENDERROR
    }
}


export const searchState = () => {
    return {
        type: I_SEARCHSTATE
    }
}

export const searchData = (id) => {
    return {
        type: I_SEARCHDATA,
        text:id
    }
}



// 异步action，都会返回一个函数，而不是对象
export const reqDefault = () => {
  
    return (dispatch) => {
        dispatch(actionStart()) //开始数据请求
        // fetch("http://localhost:9999/index").then((res) => {
        fetch("/index").then((res) => {
            if (res.status == "200") {
                res.json().then((data) => {

                    dispatch(actionOk(data)) //数据请求成功
                })

            } else {
                dispatch(actionError()) //数据请求失败
            }
        }).catch(() => {
            dispatch(actionError()) //数据请求失败

        })
    }
}