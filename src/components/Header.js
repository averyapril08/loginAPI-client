import React, { Component } from 'react';
import './Header.scss';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Action your items </h1>
                <p>In the form below please add some items.
                you would like and sort them meanwhile you can search items and delete items as well.</p>
            </div>
        );
    }
}

export default Header;
