import React from "react";
import ReactDOM from "react-dom";
import {  BrowserRouter as Router, Route, Link  } from 'react-router-dom';

const ROOT_ELEM = document.getElementById("index");

class Index extends React.Component {
    render(){
        return (<div><h2>Hello React!</h2> <Link to='/about'>About</Link></div>);
    }
};

class About extends React.Component {
    render(){
        return (<div>About React!</div>);
    }
};

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