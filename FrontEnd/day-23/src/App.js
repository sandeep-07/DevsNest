import React,{useState} from "react"
import { useFetch } from "./hook"

const URL = "https://dog.ceo/api/breeds/image/random"
function App() {
  const { loading, error, data } = useFetch(URL)
  // const [res, setres] = useState(null)
  console.log(data)
  if (!data)
    return <div>Loading</div>
  else
    return (
      <div>
        <img src={ data.message}/>
        
      </div>)
}

export default App;
