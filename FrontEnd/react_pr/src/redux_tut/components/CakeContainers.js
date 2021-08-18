import React from 'react'
import { connect } from 'react-redux'
import {buyCake} from '../redux'

function CakeContainers(props){
    
    return (
        <div>
            <h2>Nummber of cakes{props.numOfCakes }</h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {

    // console.log(state)
    return {
        numOfCakes: state.cake.numOfCakes        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(CakeContainers)
