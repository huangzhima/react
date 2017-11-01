import { connect } from "react-redux"
import IndexJsx from "./contains/index.jsx"

const select = (state) => {
    return {
       register:state.register
    }
}

export const Register = connect(select)(IndexJsx)


export { default as RegisterReducer }
from "./reducers"