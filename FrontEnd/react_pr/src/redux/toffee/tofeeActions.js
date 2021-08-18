import {
    BUY_TOFFEE
} from "./toffeeTypes";

export const buyToffee = (number) => {
    return {
        type: BUY_TOFFEE,
        payload:number
    }
}