import React from 'react';
import {createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';


const initialState = {};

const middleware = [thunk];

const rootReducer = combineReducers({

});

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;

