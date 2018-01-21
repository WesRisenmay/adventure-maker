import React, { Component } from 'react';
import Navigation from '../../Navigation/Navigation';
import PropTypes from 'prop-types';
import Routes from '../../Routes/Routes';
import './Body.css';

export default class Body extends Component {
    static propTypes = {
        isNavigationOpen: PropTypes.bool
    };

    render() {
        return (<div className="am-body">
            <Routes />
            <Navigation
                isOpen={this.props.isNavigationOpen}
            />
        </div>);
    }
}
