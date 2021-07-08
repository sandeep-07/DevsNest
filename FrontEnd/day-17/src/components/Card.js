import React from 'react'
import "../css/card.css"
function Card({iml,name,description}) {

    return (
        
            <div className="card">
                <div className="card__image">
                    <img src={ iml} />
                </div>
                <div className="card__heading">
                    <h2>{name}</h2>
                </div>
                <div className="card__text">
                    {description}
                </div>
            </div>
            
        
            
    )
    
}

export default Card;