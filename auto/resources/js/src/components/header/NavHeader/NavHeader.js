import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavHeader extends Component {
    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link class="navbar-brand" to="#">AutoJohn</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-item nav-link active" to="/">Home Page<span class="sr-only">(current)</span></Link>
                            <Link class="nav-item nav-link" to="/register">Register</Link>
                            <Link class="nav-item nav-link" to="/login">Login</Link>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default NavHeader;