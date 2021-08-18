import React from 'react'
import { connect } from 'react-redux'
import {buyIceCream} from "../redux"

export const IceCreamContainer = (props) => {
    
    return (
        <div>
            <h3>Number of icecreams {props.numOfIceCreams}</h3>
            <button onClick={props.buyIceCream}>sell icecream</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return{
        numOfIceCreams:state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps =(dispatch)=> {
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
