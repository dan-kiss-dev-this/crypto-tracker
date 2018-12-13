import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent2 from './ChartComponent';
import ApiComponent from './ApiComponent';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. Baby!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <TestComponent2 name='steve'/>
          <ApiComponent />
        </div>
      </div>
    );
  }
}

export default App;
