import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk';
import postReducer from "./Reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
export default () => {
    const store = createStore(
        combineReducers({
            post: postReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};