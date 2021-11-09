import * as photosActionTypes from './PhotosActionTypes';

const intialState = {
    loading: false,
    photos: [],
    error: ''
}

const photosReducer = (state = intialState, action) => {
    switch(action.type){
        case photosActionTypes.FETCH_PHOTO_REQUEST : 
            return{
                ...state,
                loading: true
            }
        case photosActionTypes.FETCH_PHOTO_SUCCESS :
            return{
                ...state,
                loading:false,
                photos: action.payload,
                error: ''
            }
        case photosActionTypes.FETCH_PHOTO_ERROR :
            return{
                ...state,
                loading: false,
                photos: [],
                error: action.payload
            }
        default: return state
    }
}

export default photosReducer;