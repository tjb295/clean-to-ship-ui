import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Button} from './common';
import store from '../reducers';
import Home from './Home';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render(){
        return(
            <Provider store={store}>
                <Home />
            </Provider>

        );
    }
}