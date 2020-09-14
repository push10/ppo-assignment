import content from '../apis/content';
import history from '../history';

export const search = (term, searchAction =false) =>
    async dispatch => {
        const response = await content.get(`/getContentByTitle/${term}`);
        dispatch({
            type: 'SEARCH',
            payload: response.data
        });
        if(searchAction){
            history.push('search');
        }
        
    }

export const selectContent = (id) =>
    async dispatch => {
        const response = await content.get(`/getContent/${id}`);
        dispatch({
            type: 'SELECT_CONTENT',
            payload: response.data
        });
        
    }