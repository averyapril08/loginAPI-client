import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getLog } from '../actions/logAction';
import './Header.scss';



class Header extends Component {
     componentDidMount(){
         this.props.getLog();
     }
    render() {
        const {texts} = this.props;
        let log;
        log = texts.filter((text,index)=> index<10).map(txt => (
            <li key={txt._id}> {txt.text}</li>
        ))
        return (
            <div className="header">
                <div>
                    <h1>Action your items </h1>
                    <p>In the form below please add some items.
                you would like and sort them meanwhile you can search items and delete items as well.</p>
                </div>
                <div className="log">
                    <ul>
                        {log}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    texts:state.texts
})

export default connect(mapStateToProps,{getLog})(Header);
