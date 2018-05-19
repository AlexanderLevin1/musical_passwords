/* eslint-disable */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import userReducer from './user';
import levelsReducer from './levels';

const reducer = combineReducers({
    user: userReducer,
    levels: levelsReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export * from './user';
export * from './levels';




