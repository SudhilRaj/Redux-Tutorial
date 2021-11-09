import { combineReducers } from "redux";
import photosReducer from "./photos/photosReducer";
import todosReducer from "./todos/todosReducer";

const rootReducer = combineReducers({
    photos: photosReducer,
    todos: todosReducer
})

export default rootReducer;