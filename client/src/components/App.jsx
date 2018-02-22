import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'isomorphic-fetch';
import ChirpList from './ChirpList';

class App extends Component {

    render() {
        return (
            <Fragment>    
                <h1>Welcome to Chirper!</h1>
                <input type="text"/>
                <input type="text"/>
                <button>SUBMIT</button>
                <ChirpList />

            </Fragment>
        )
    }
}

export default App;