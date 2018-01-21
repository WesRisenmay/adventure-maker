import React, { Component } from 'react';
import classNames from 'classnames';
import './Navigation.css';

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animateOpen: false
        };
    }

    componentDidUpdate(previousProps, previousState) {
        if (!previousProps.isOpen && this.props.isOpen) {
            setTimeout(() => {
                this.setState({
                    animateOpen: true
                });
            }, 50);
        } else if (previousProps.isOpen && !this.props.isOpen) {
            this.setState({
                animateOpen: false
            });
        }
    }

    render() {
        const containerClassNames = classNames('am-navigation', {
            'open': this.state.animateOpen
        });

        return (<div className={containerClassNames}>
            This is the navigation
        </div>);
    }
}
