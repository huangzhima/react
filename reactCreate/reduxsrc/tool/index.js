export const actionType = {
    ADD: "add"
}

export const actions = {
    add_fn() {
        return {
            type: actionType.ADD,
            text: 1
        }
    }
}

let stateInitial = {
    num: 0
}

const reducer = (state = stateInitial, action) => {
    const { type, text } = action
    console.log(22)

    switch (type) {
        case actionType.ADD:
            {
                console.log(state.num)
                let num = state.num + 3
                return Object.assign({}, state, { num: num })
            }
        default:
            {
                return state
            }
    }
}

import { createStore } from "redux"
export const store = new createStore(reducer)