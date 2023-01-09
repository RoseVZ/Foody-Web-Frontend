import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//initialize the initial state
const initialState = {}
const middleware = [thunk] 
const store = createStore(
    rootReducer,
    initialState,
    //debugs stuff in debug store
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;