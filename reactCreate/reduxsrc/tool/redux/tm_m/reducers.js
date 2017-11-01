import { ADD } from "./actionType"
const stateInitial = {
    count: 1
}


export default (state = stateInitial, actions) => {
    const { type, text } = actions

    switch (type) {
        case ADD:
            {
                console.log("tm")
                return Object.assign({}, state, { count: state.count + text })
            }
        default:
            {
                return state
            }
    }
}