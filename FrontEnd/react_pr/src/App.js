import React from 'react'
import store from './redux/store'
import { Provider } from 'react-redux'
// import CakeContainers from './components/CakeContainers'
// import HooksCakeContainer from './components/HooksCakeContainer'
// import IceCreamContainer from './components/IceCreamContainer'
// import HokksIceCreamContainers from './components/HokksIceCreamContainers'
// import NewCakeContainer from './components/NewCakeContainer'
import UserContainer from "./UserContainer"
export default function App() {
    return (
        <Provider store={store}>
            <div >
                {/* <CakeContainers />
                <HooksCakeContainer />
                <IceCreamContainer />
                <HokksIceCreamContainers />
                <NewCakeContainer/> */}
                <UserContainer/>
            </div>
        </Provider>
    )
}
