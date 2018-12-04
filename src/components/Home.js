import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                <div class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand">Clean To Ship</a>
                    <button class="navbar-toggle" data-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navcontent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="https://thomasjohanback.com">My Site</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}