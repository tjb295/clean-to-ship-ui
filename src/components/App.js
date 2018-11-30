import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button} from './common';

export default class App extends Component {

    setAlert(){
        alert("im sorry");
    }
    render(){
        return(
            <div>
                <Button action={this.setAlert}>Eat my shit</Button>
                <h1>don't eat my alive u bitch</h1>
            </div>

        );
    }
}