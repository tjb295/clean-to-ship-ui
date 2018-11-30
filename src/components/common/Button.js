import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export class Button extends Component {
    render(){
        return(
            <button class="btn btn-success" onClick={this.props.action}>
                {this.props.children}
            </button>
        )
    }
}