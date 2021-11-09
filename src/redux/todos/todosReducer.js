import * as todosActionTypes from './todosActionTypes';

const initialState = {
    loading: false,
    todos: [],
    error: ''
}

const todosReducer = (state=initialState, action) => {
    switch(action.type){
        case todosActionTypes.FETCH_TODO_REQUEST :
            return{
                ...state,
                loading: true
            }
        case todosActionTypes.FETCH_TODO_SUCCESS : 
            return{
                ...state,
                loading: false,
                todos: action.payload,
                error: ''
            }
        case todosActionTypes.FETCH_TODO_ERROR :
            return{
                ...state,
                loading: false,
                todos: [],
                error: action.payload
            }
        default: return state
    }
}

export default todosReducer;