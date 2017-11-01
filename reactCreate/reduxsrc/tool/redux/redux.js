import tm_reducer from "./tm_m/reducers"
import zfb_reducer from "./zfb_m/reducers"

import { combineReducers, createStore } from "redux"
const app = combineReducers({
    zfb: zfb_reducer,
    tm: tm_reducer

})


export default new createStore(app)