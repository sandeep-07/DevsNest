import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {buyIceCream} from "../redux"
function HokksIceCreamContainers() {
    const iceCream = useSelector(state => {
        return state.iceCream.numOfIceCreams
    })
    const dispatch=useDispatch()
    return (
        <div>
            <h3>Number of IceCreams {iceCream}</h3>
            <button onClick={()=>dispatch(buyIceCream())}>Buy iceCream</button>
        </div>
    )
}

export default HokksIceCreamContainers
