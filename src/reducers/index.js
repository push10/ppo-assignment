import { combineReducers } from 'redux';
const songListReducers = () => {
    return [
        { 'title': 'Tujhe dekha to ye jana....', 'duration': 3.55 },
        { 'title': 'Kuch kuch hota hei....', 'duration': 5.05 },
        { 'title': 'Balam pichkari....', 'duration': 5.32 },
        { 'title': 'Ye mere watan ke logo....', 'duration': 5.5 },
        { 'title': 'Ye lal rang....', 'duration': 3.45 },
        { 'title': 'Didi tera dewar diwana....', 'duration': 2.55 },
        { 'title': 'Ankhiye se goli mare....', 'duration': 3.00 }

    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    }
    return selectedSong;

}
export default combineReducers({
    selectedSong: selectedSongReducer
})