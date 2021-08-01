import React,{useContext,useState} from 'react'
import Movie from "./Movie"
import {MovieContext} from "./MovieContext"

const MovieList = () => {

    const [movies,setMovies]=useContext(MovieContext)
    

    return (
        <div>
            {/* <h1>{value}</h1> */}
            {
                movies.map(movie => {
                    return <Movie movie={movie.name} price={movie.price} key={ movie.id}/>
        })
            }
        </div>
    )
}
export default MovieList