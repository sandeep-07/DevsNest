import React,{useState} from 'react'
import { usernameType } from "../redux"
import { passwordType } from '../redux'
import {useSelector,useDispatch} from "react-redux"
function UserContainer() {
    

    const username = useSelector(state => {
        console.log(state)
        return state.userState.username
    })
    const password = useSelector(state => {
        // console.log(state)
        return state.userState.password
    })

    const dispatch = useDispatch()
    return (
        <div>
            <h2>Username</h2>
            <input type="text" onChange={
                (e) => { dispatch(usernameType(e.target.value)) }}
            />
            <h3>{username}</h3>
            <h2>Email</h2>
            <input type="text" onChange={
                (e) => { dispatch(passwordType(e.target.value)) }}
            />
            <h3>{password}</h3>
        </div>
    )
}

export default UserContainer
