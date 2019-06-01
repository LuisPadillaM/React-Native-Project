import { createAction, handleActions } from 'redux-actions';

// Acctions
export const FIRST_ACTION = createAction('FIRST_ACTION');


export const initialState = {
    title: 'App Title',
    categories: [
        {
            title: 'Section 1',
            url   : 'url1',
        },
        {
            title: 'Section 2',
            url   : 'url2',
        },
        {
            title: 'Section 3',
            url   : 'url3',
        },
        {
            title: 'Section 4',
            url   : 'url4',
        },
        {
            title: 'Section 5',
            url   : 'url5',
        },
    ],
};

// Reducer
export default handleActions({
    FIRST_ACTION: (state, action) => {
        return Object.assign({}, state, { title: action.payload });
    },
}, initialState);

// Action dispatchers
export const firstAction = (newTitle) => {
    return (dispatch) => {
        dispatch(GET_ALL_TASKS(newTitle));
    };
};
