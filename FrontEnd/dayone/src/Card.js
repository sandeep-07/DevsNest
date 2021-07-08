import React from 'react'
import "./card.css"
function Card() {
    return (
        <div className="card">
            <div className="card__image">
                <img src = "https://images.unsplash.com/photo-1510552776732-03e61cf4b144?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym95fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                alt = "nA" />
            </div>
            <div className="card__heading">
                <h2>Sandeep</h2>

            </div>
            <div className="card__body">
                This is my card text
                This is my card text
            </div>

        </div>
    )


}
export default Card