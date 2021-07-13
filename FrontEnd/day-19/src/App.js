import React,{useState} from "react"
function App() {
  const [a, seta] = useState(0)
  const [b, setb] = useState(0)
  const [c, setc] = useState(0)
  const [d, setd] = useState(0)
  return (
    <div >
      <button onClick={()=>{seta(a+1)}}>
        {a}
      </button>
      <button onClick={()=>{setb(b+1)}}>
        {b}
      </button>
      <button onClick={()=>{setc(c+1)}}>
        {c}
      </button>
      <button onClick={()=>{setd(d+1)}}>
        {d}
      </button>
        

    </div>
  );
}

export default App;
