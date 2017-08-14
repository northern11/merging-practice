import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import burger from './burger.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>CodeKevCode and Northern11</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img src= {burger} alt="Burger Should Be Here"  />
      </div>
    );
  }
}

export default App;
