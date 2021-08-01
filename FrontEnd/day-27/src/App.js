import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button,Card,Container,Col,Row } from 'react-bootstrap';


function App() {
  const [place, setplace] = useState("")
  const [text, settext] = useState("")
  const [finalData,setData]=useState("")
  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=2c354446c88048109fd54113210108&q=${place}`)
      .then(res => res.json())
      .then(data => {
        console.log(place)
        console.log(data)
        setData(data)
      })
  },[place])

  const Weather = () => {
    {}
  return(
    <div className="weather">
      <img src={finalData.current.condition.icon} />
      <h6>{finalData.location.name}</h6>
      {/* <p>{finalData.current.condition.text}</p> */}
      <h1 className="temp">{finalData.current.temp_c} °</h1>
      <p>{finalData.current.condition.text}</p>

      <div className="container uhp">
        <div className="row">
          <div className="col">
            <div className="title">Wind</div>
            <div className="data">12 <span className="unit">km/h</span> </div>
          </div>
          <div div className = "col" > 
            <div className="title">Humidity</div>
            <div className="data">{ finalData.current.humidity}%</div>
          </div>
          <div className="col">
            <div className="title">Precipitation</div>
            <div className="data">{finalData.current.precip_in }</div>
          </div>
        </div>
      </div>
      
      

    </div>
  )
}


  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="form">
            <div className="col">
              <input type="text" onChange={(e)=>settext(e.target.value)}/>
              <Button variant="primary" onClick={()=>setplace(text)}>Submit</Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card" style={{width:"300px" }}>
              { finalData?.location?.name?<Weather/>:<h2>Page not found</h2>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
