import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.min.css';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NavHeader from "./components/header/NavHeader";
import Register from './components/auth/Register/RegisterPage'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavHeader />
                <div >
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/register">
                        <Register/>
                    </Route>

                    <Route exact path="/login">
                        <Home />
                    </Route>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));