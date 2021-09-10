import { createStore ,combineReducers} from "redux";
import counterReducer from "./counter/counterReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    counterState: counterReducer,
    userState:userReducer
})

const store = createStore(rootReducer)
export default store