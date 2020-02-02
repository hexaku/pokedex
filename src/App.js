import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import backgroundImage from './pattern.png';

import Navbar from './Components/Layout/Navbar';
import Dashboard from './Components/Layout/Dashboard';
import Pokemon from './Components/Pokemon/Pokemon';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App" style={{ background: `url(${backgroundImage})` }}>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonId" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
