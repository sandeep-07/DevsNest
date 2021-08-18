import { combineReducers,createStore } from "redux";
import cakeReducer from './cake/cakeReducer'
import toffeeReducer from './toffee/toffeeReducer'
import iceCreamReducer from "./icecream/iceCreamReducer";
import UserReducer from "./user/UserReducer";
const rootReducer=combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    tofee: toffeeReducer,
    user:UserReducer
})

export default rootReducer