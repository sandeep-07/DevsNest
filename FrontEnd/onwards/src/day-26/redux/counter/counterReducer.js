import { INC_COUNTER } from "./counterTypes";
import { DEC_COUNTER } from "./counterTypes";

const initialState = {
    counter:0
}

const counterReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case INC_COUNTER:
            return {
                ...state,
                counter:state.counter+1
            }
        case DEC_COUNTER:
            return {
                ...state,
                counter:state.counter-1
            }

        default:return state
        
    }
    
}
export default counterReducer