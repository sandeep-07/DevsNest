import { INC_COUNTER } from "./counterTypes";
import { DEC_COUNTER } from "./counterTypes";

export const incCounter = () => {
    return {
        type:INC_COUNTER
    }
}
export const decCounter = () => {
    return {
        type:DEC_COUNTER
    }
}