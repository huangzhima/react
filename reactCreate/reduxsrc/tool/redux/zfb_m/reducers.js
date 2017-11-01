import { ADD } from "./actionType"
const stateInitial = {
    num: 0
}


export default (state = stateInitial, actions) => {
    const { type, text } = actions

    switch (type) {
        case ADD:
            {
                console.log("zfb")
                return Object.assign({}, state, { num: state.num + text })
            }
        default:
            {
                return state
            }
    }
}