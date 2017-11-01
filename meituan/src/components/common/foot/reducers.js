import { combineReducers } from "redux"
import { F_SENDSTART, F_SENDOK, F_SENDERROR } from "./actionsTypes"
const defaultInitial = {
    state: false,
    data:[]
}

export const defaultReducer = (state = defaultInitial, action) => {
    const { type, text } = action
    switch (type) {
        case F_SENDSTART:
            {

                return Object.assign({}, state, { state: "start" })
            }
        case F_SENDOK:
            {

                return Object.assign({}, state, { state: "ok",data:text })
            }
        case F_SENDERROR:
            {

                return Object.assign({}, state, { state: "error" })
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