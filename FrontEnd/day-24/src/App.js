import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Dashboard from "./Dashboard"
import Nav from "./Nav"
import { StateProvider } from "./Context"
import "./App.css"
export default function App() {
    return (
      <div>
        <Router>
          <StateProvider>  
            <Nav/>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </StateProvider>
        </Router>
      </div>
    )
}
