import axios from 'axios';
import * as photosActionTypes from './PhotosActionTypes';

export const fetch_request = () => {
    return{
        type: photosActionTypes.FETCH_PHOTO_REQUEST
    }
}

export const fetch_success = (data) => {
    return{
        type: photosActionTypes.FETCH_PHOTO_SUCCESS,
        payload : data
    }
}

export const fetch_error = (error) => {
    return{
        type: photosActionTypes.FETCH_PHOTO_ERROR,
        payload: error
    }
}

export const fetch_photos = () => {
    return (dispatch) => {
        dispatch(fetch_request());
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20')
        .then(response => {
            dispatch(fetch_success(response.data));
        })
        .catch(error => {
            dispatch(fetch_error(error.message));
        })
    }
}