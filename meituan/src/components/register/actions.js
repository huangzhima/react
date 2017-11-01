
// AJAX执行成功
export const actionOk = (type,data) => {
    return {
        type: type,
        data:data,
    }
}
// AJAX执行失败
export const actionError = (type) => {
    return {
        type: type
    }
}




// 异步action，都会返回一个函数，而不是对象
export const reqAJAX = (url,type,text) => {
  
    return (dispatch) => {
        fetch(url,{method: 'GET'}).then((res) => {
            if (res.status == "200") {
                res.json().then((data) => {
                    const alldata={
                        data:data,
                        native:text
                    }
                    console.log(alldata)
                   
                    dispatch(actionOk(type.ok,alldata)) //数据请求成功
                })

            } else {
                dispatch(actionError(type.error)) //数据请求失败
            }
        }).catch(() => {
            dispatch(actionError(type.error)) //数据请求失败

        })
    }
}

