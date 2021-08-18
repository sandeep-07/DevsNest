import { BUY_TOFFEE } from "./toffeeTypes"

const initialState = {
    numOfToffee:50
}
const toffeeReducer = (state=initialState,action) => {

    switch(action.type){
        case BUY_TOFFEE:
        return {
            ...state,
            toffee:state.toffee-action.payload
            }
        default:
            return state
    }
}

export default toffeeReducer