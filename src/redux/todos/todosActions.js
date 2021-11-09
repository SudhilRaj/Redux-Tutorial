import axios from 'axios';
import * as todosActionTypes from './todosActionTypes';

export const fetch_request = () => {
    return{
        type: todosActionTypes.FETCH_TODO_REQUEST
    }
}

export const fetch_success = (data) => {
    return{
        type: todosActionTypes.FETCH_TODO_SUCCESS,
        payload: data
    }
}

export const fetch_error = (error) => {
    return{
        type: todosActionTypes.FETCH_TODO_ERROR,
        payload: error
    }
}

export const fetch_todos = () => {
    return (dispatch) => {
        dispatch(fetch_request());
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
        .then(respone => {
            dispatch(fetch_success(respone.data))
        })
        .catch(error => {
            dispatch(fetch_error(error.message))
        })
    }
}