import { USERNAME_TYPE } from "./userActionType";
import { PASSWORD_TYPE } from "./userActionType";

const initialState = {
    username: "",
    password:""
}
const userReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case USERNAME_TYPE:
            return {
                ...state,
                username:action.payload
            }
        case PASSWORD_TYPE:
            return {
                ...state,
                password:action.payload
            }
        default:
            return state
    }
}

export default userReducer