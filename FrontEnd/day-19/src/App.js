import React, { useState } from "react"
import Button from "./component/Button"
import Buttons from "./component/Buttons"
function App() {
  const [a, seta] = useState(0)
  const [b, setb] = useState(0)
  const [c, setc] = useState(0)
  const [d, setd] = useState(0)
  return (
    <div >
      <Buttons/>

    </div>
  );
}

export default App;
