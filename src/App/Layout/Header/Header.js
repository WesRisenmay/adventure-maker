import React, { Component } from 'react';
import { FaBars } from 'react-icons/lib/fa';
import PropTypes from 'prop-types';
import './Header.css';

export default class Header extends Component {
    static propTypes = {
        onClickMenu: PropTypes.func.isRequired
    };

    render() {
        return (<div className="am-header">
            <FaBars
                className="navigation-button"
                onClick={this.props.onClickMenu}
            />
            <div className="title">
                This is the header
            </div>
        </div>);
    }
}
