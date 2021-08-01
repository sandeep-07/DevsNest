import React from 'react'

const Movie = ({movie,price}) => {


    return (
        <div>
            <h3>{movie}</h3>
            <h4>{price}</h4>
        </div>
    )
}
export default Movie