import { ADD } from "./actionType"

export const add_c = function(text) {
    return {
        type: ADD,
        text: text
    }
}