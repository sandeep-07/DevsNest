import React from 'react'
import Card from './components/Card'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card__container">
      <Card iml="https://images.unsplash.com/photo-1625489338859-f6340ab8e1ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNTc2MzAyMw&ixlib=rb-1.2.1&q=80&w=1080" name="Manali" description="Covid ke baad yha aana"/>
      <Card iml="https://images.unsplash.com/photo-1623593372513-d30787aa1552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNTc2Mjk2MA&ixlib=rb-1.2.1&q=80&w=1080" name="Srinagar" description="Heaven on Earth"/>
      <Card iml="https://images.unsplash.com/photo-1618430728669-52c21e1221ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNTc2Mjk4MQ&ixlib=rb-1.2.1&q=80&w=1080" name="Shimla" description="Ek baar aake to dekho"/>
      </div>
    </div>
  );
}

export default App;
