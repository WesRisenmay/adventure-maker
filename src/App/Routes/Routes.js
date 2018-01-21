import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Home from '../Home/Home'

export default class Routes extends Component {
    render() {
        return (<Router>
            <Route exact path="/" component={Home}/>
        </Router>);
    }
}
