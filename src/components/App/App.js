import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from '../Navigation.js'
import Clock from '../Clock.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Navigation/>
        </header>

        <Clock deadline='May 3, 2018' />
      </div>
    );
  }
}

export default App;
