import React, { Component } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import './Layout.css';

export default class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavigationOpen: false
        };

        this.toggleNavigation = this.toggleNavigation.bind(this);
    }

    toggleNavigation() {
        this.setState({
            isNavigationOpen: !this.state.isNavigationOpen
        });
    }

    render() {
        return (<div>
            <Header onClickMenu={this.toggleNavigation} />
            <Body isNavigationOpen={this.state.isNavigationOpen} />
        </div>);
    }
}
