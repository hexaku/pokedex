import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import backgroundImage from './pattern.png';

import Navbar from './Components/Layout/Navbar';
import Dashboard from './Components/Layout/Dashboard';

class App extends Component {
  render(){
    return <div className="App" style={{ background: `url(${backgroundImage})` }}>
      <Navbar />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  }
}

export default App;
