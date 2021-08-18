import React from 'react'
import { connect } from 'react-redux'

export const SongDetail = ({myselectedsong}) => {
    // console.log(props)
    if(myselectedsong)
    {return (
        <div>
            Song detail

            <h3>{myselectedsong.title}</h3>
            <h3>{myselectedsong.duration}</h3>
        </div>
    )
    }
    else
        return (
            <div> No song selected</div>
        )
}

const mapStateToProps = (state) => {
    return {myselectedsong:state.selectedSong}
    
}


export default connect(mapStateToProps)(SongDetail)
