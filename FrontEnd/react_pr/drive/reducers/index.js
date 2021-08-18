import { combineReducers } from "redux"

const songReducer = () => {
    return [
        {title:'No Scrubs',duration:'4:05'},
        {title:'Waka waka',duration:'1:25'},
        {title:'No Lies',duration:'3:32'},
        {title:'Do not lie',duration:'2:25'},
        
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}


export default  combineReducers({
    songs: songReducer,
    selectedSong:selectedSongReducer
})