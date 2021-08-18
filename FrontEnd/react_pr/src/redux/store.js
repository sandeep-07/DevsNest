import { applyMiddleware, combineReducers,createStore } from "redux";
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from "./icecream/iceCreamReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import rootReducer from "./rootReducer"
import thunk from 'redux-thunk'
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store