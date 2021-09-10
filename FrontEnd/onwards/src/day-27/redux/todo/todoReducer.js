import {ADD_TODO} from "../todo/actionType"
import { DELETE_TODO } from "../todo/actionType"
import { LOAD_TODO } from "../todo/actionType"


const todoReducer = (state = [], action) => {
    console.log(action.type)

    switch (action.type) {
        case ADD_TODO:
            return  [...state,action.payload]

        case DELETE_TODO:
            return state.filter((item, index) => index !== action.payload)
        case LOAD_TODO:
            return action.payload
        default:
            return state
    }
    
}
export default todoReducer