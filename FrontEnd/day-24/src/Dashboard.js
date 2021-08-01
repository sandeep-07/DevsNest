import React, {
    useState,
    useContext,createContext
} from "react"
import {Redirect,BrowserRouter as Router} from "react-router-dom"
import {StateContext} from "./Context"

export default function Dashboard() {
    const logger = useContext(StateContext)
    return (
        <div>
            <Router>
                {
                    logger.loggedin?"Welcome":"Kindly login"
                }
            </Router>
        </div>
        
    )
    
}
