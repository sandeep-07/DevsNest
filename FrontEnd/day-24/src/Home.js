import React,{useContext} from 'react'
import {StateContext} from "./Context"
export default function Home() {

    const logger = useContext(StateContext)
    
    console.log(logger)

    return (
        <>
            <div>Hey</div>
            <button onClick={() => logger.tooglelogin()}>{ logger.loggedin?<div>Logout</div>:<div>Login</div>}</button>
        </>
    )
   
}
