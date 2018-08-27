import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Home from "./silly/myself/main/home/Home";
import Login from "./silly/myself/main/login/Login";
import Writer from "./silly/myself/main/writer/Writer";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/writer" component={Writer}/>
                </div>
            </Router>
        );
    }
}

export default App;
