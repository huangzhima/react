import { F_SENDSTART, F_SENDOK, F_SENDERROR } from "./actionsTypes"

export const actionStart = () => {
    return {
        type: F_SENDSTART
    }
}

export const actionOk = (text) => {
    return {
        type: F_SENDOK,
        text: text
    }
}
export const actionError = () => {
    return {
        type: F_SENDERROR
    }
}



// 异步action，都会返回一个函数，而不是对象
export const reqDefault = () => {
    return (dispatch) => {
        dispatch(actionStart()) //开始数据请求
        //  fetch("http://localhost:9999/footnav").then((res) => {
        fetch("/footnav").then((res) => {
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