import React,{useEffect,useState} from "react"
import Post from "./Post"
const Posts = () => {
    const [data,setData]=useState([])
    const fetchapi = async () => {
        const res = await fetch("https://randomuser.me/api/?results=5")
        const data = await res.json()
        setData(data.results)
        
    }
    useEffect(() => {
        fetchapi()
    },[])

    console.log(data)
    return <div>{
        data.map((user,index) => {

            return <Post  key={index} user={user} />
        })
    }
    </div>
}

export default Posts