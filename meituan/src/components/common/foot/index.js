import { connect } from "react-redux"
import IndexJsx from "./contains/index.jsx"

const select = (state) => {
    return {
        foot: state.foot,
    }
}

export const Foot = connect(select)(IndexJsx)
export {reqDefault as footDefault} from "./actions.js"

export { default as footReducer }
from "./reducers"