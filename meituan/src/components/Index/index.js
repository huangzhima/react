import { connect } from "react-redux"
import IndexJsx from "./contains/index.jsx"

// 将store中的部分数据灌入到容器组件
const select = (state) => {
    return {
        index: state.index,
        foot:state.foot
    }
}
// 将store数据中心和容器组件相连接，并抛出容器组件
export const Index = connect(select)(IndexJsx)

// 抛出当前的模块的reducer
export { default as IndexReducer }
from "./reducers"