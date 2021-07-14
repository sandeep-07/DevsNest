import React from 'react';
import "./Button.css"
function Button({ state, setstate }) {
    return (
        <div className="button">
            <div className = "box" >
                <span > </span>
                <h2 onClick = {() => {setstate(state + 1)}}> {state} </h2>
                {/* <h2 > 01 </h2>  */}
            </div>
        </div>
    )
}
export default Button