import React from 'react'
import CounterContainer from './containers/CounterContainer'
import store from "./redux/store"
import { Provider } from 'react-redux'
import UserContainer from "./containers/UserContainer"

function App26() {
    return (
        
            <Provider store={store}>
            <CounterContainer />
            <UserContainer/>
            </Provider>
        
    )
}

export default App26
