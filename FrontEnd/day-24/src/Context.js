import React, { useState, createContext } from "react"

export const StateContext=createContext()
export const StateProvider = (props) => {
    
    const [loggedin, setloggedin] = useState(false)
    const logger={
        loggedin: loggedin,
        tooglelogin:()=>setloggedin(!loggedin)
    }
    
    // const x ="<div>Just testing</div>"

    return (
        <StateContext.Provider value={logger}>
            {props.children}
        </StateContext.Provider>
    )
    
}