import React from 'react'
import {Link} from "react-router-dom"
export default function Nav() {
    return (
        <div className="nav">
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
            <div>
                <Link to="/dashboard">Dashboard</Link>
            </div>
        </div>
    )
}
