import React,{useState,createContext} from 'react'

export const MovieContext=createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([{
            name: "Harry Potter",
            price: "$10",
            id: 234
        },
        {
            name: "Spider Man",
            price: "$102",
            id: 2341
        },
        {
            name: "Avengers",
            price: "$10",
            id: 234223
        }
    ])
    return (
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}
