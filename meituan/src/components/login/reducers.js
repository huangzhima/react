import { combineReducers } from "redux"
import { R_CODEOK, R_CODEERROR,R_SENDCODEERROR,R_SENDCODEOK,R_SENDPSOK,R_SENDPSERROR} from "./actionsTypes"
const defaultInitial = {
    state: "phone",
    code:false,
    phone:""
}

export const defaultReducer = (state = defaultInitial, action) => {
    const { type,data } = action
    switch (type) {
        
        case R_SENDCODEOK:    //发送验证码成功
            {
                if(data.data.state=="0"){
                    return Object.assign({}, state, { state:"code",phone:data.native })
                }else{
                    return Object.assign({}, state, { state: "phone",code:true })
                }
                
            }
        case R_SENDCODEERROR:  //发送验证码失败
            {
                console.log("error")
               return Object.assign({}, state, { state: "phone",code:true })
            }

        case R_CODEOK:  //验证码成功
            {   
                 if(data.data.state=="ok"){
                     return Object.assign({}, state, { state:"PS"})
                 }else{
                     const obj=Object.assign({}, state, { state: "code"})
                   
                     return obj
                 }
               
            }
        case R_CODEERROR:  //验证码失败
            {
                   
                    const obj=Object.assign({}, state, { state: "code"})
                   
                return obj
            }
        case R_SENDPSOK:  ///密码成功
            {   
                 if(data.data.state=="ok"){
                     return Object.assign({}, state, { state:"OK"})
                 }else{
                     const obj=Object.assign({}, state, { state: "PS"})
                   
                     return obj
                 }
               
            }
        case R_SENDPSERROR:  //密码失败
            {
                   
                    const obj=Object.assign({}, state, { state: "PS"})
                   
                return obj
            }
        default:
            {
                return state
            }
    }
}

export default combineReducers({
    default:defaultReducer
})