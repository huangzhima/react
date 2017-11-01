import { connect } from "react-redux"
import IndexJsx from "./contains/index.jsx"

const select = (state) => {
    return {
       login:state.login
    }
}

export const Login = connect(select)(IndexJsx)


export { default as LoginReducer }
from "./reducers"