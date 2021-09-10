import { USERNAME_TYPE } from "./userActionType";
import { PASSWORD_TYPE } from "./userActionType";

export const usernameType = (username) => {

    return {
        type: USERNAME_TYPE,
        payload:username
    }
}
export const passwordType = (password) => {
    return {
        type: PASSWORD_TYPE,
        payload:password
    }
}