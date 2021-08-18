import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux'


function HooksCakeContainer() {
    const numOfCakes = useSelector(state => {
        // console.log(state)
        return state.cake.numOfCakes
    })
    const dispatch=useDispatch()
    return (
        <div>
            <h2>Nummber of cakes{numOfCakes }</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
