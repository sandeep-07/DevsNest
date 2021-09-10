import React from 'react'
import styles from './CounterContainer.module.css'

import {useSelector,useDispatch} from "react-redux"
import {incCounter} from "../redux"
import {decCounter} from "../redux"
function CounterContainer() {
    const counter = useSelector(state => {
        // console.log(state)
        return state.counterState.counter
    })
    const dispatch = useDispatch()
    return (
        <div className={styles.counterContainer}>
            <button onClick={()=>dispatch(incCounter())}>+</button>
                    {counter}
            <button onClick={()=>dispatch(decCounter())}>-</button>
        </div>
    )
}

export default CounterContainer
