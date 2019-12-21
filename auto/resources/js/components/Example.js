import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return ( 
            <div className="content_center">
            <h1 className="my_header">Hello</h1>
            </div> 
        );
    }
}

if (document.getElementById('App')) {
    ReactDOM.render(<Example />, document.getElementById('App'));
}
