import React,{useState} from "react"
import { useFetch } from "./hook"

const URL = "https://api.imgflip.com/get_memes"
function App() {
  const { loading, error, data } = useFetch(URL)
  const [res, setres] = useState(null)
  console.log(data)
  return (
    <div className="App">
      {
        data
          ?
          
          <div>We got it</div>
          :
          <div>we didnt get</div>
      
      }
    </div>
  );
}

export default App;
