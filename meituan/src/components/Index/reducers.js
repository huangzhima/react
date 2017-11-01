import { combineReducers } from "redux"
import { I_SENDSTART, I_SENDOK, I_SENDERROR,I_SEARCHSTATE,I_SEARCHDATA } from "./actionsTypes"
const defaultInitial = {
    banner: [],
    state: false,
    nav:[],
    homlitlist:[],
    searchState:false,
    olddata:[],
    data:[]
}

export const defaultReducer = (state = defaultInitial, action) => {
    const { type, text } = action
    switch (type) {
        case I_SENDSTART:
            {

                return Object.assign({}, state, { state: "start" })
            }
        case I_SENDOK:
            {

                return Object.assign({}, state, { state: "ok", banner: text.bannerList,nav: text.homebignav,homlitlist:text.homeminnav,olddata:text.data })
            }
        case I_SENDERROR:
            {

                return Object.assign({}, state, { state: "error" })
            }
        case I_SEARCHSTATE:
            {

                return Object.assign({}, state, { searchState:!state.searchState })
            }
            case I_SEARCHDATA:
            {

               const item=state.olddata.find((i)=>{
                    return i.id==text
                })
                return Object.assign({}, state, { data:[item],searchState:false})
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