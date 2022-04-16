import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { postsReducer } from "./reducers/postsReducer";


const reducer = combineReducers({
    posts: postsReducer
})

export const store = createStore(postsReducer, applyMiddleware(thunk))