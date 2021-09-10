import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import TodoContainer from './container/TodoContainer'

function App27() {
    return (
        <Provider store={store}>
            Hey there
            <TodoContainer/>
        </Provider>
    )
}

export default App27
