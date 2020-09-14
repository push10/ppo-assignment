import { combineReducers } from 'redux';
const searchReducer = (result = [], action) => {
    if (action.type === "SEARCH") {        
        result = action.payload;
    }
    return result;
}

const selectedContentReducer = (selectedContent = null, action) => {
    if (action.type === 'SELECT_CONTENT') {
        return action.payload;
    }
    return selectedContent;

}
export default combineReducers({
    selectContent: selectedContentReducer,
    search: searchReducer
})