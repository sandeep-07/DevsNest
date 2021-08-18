import React from 'react'
import {connect} from 'react-redux'
import {selectSong} from '../actions'
function SongList(props) {
    // console.log(props)
    const RenderList = () => {
        const x=props.songs.map((song,ind) => {
            return (
                <div key={ind} className="item">
                    <div className="right floated content">
                        <button onClick={()=>props.selectSong(song)} className="ui button primary">
                            Select
                        </button>
                    </div>

                    <div className="content">{song.title}</div>
                    {/* <span>{song.duration}</span> */}
                </div>
            )
        })
        return x
        
    }

    // console.log(props)
    return (
        <div className="ui divided list">
            <RenderList/>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {songs:state.songs}
}

export default connect(mapStateToProps, {
    selectSong:selectSong
} )(SongList)
