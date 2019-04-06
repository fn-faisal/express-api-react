import React from "react";
import ReactDOM from "react-dom";
import {  BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import AppBar from './components/app-bar';

//-------------------------------------------
// Screens
//-------------------------------------------

import Index from './screens/index';
import About from './screens/about';

//-------------------------------------------
// Screens
//-------------------------------------------

const ROOT_ELEM = document.getElementById("index");

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Index} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, ROOT_ELEM );