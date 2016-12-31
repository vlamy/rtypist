import React, { Component } from 'react';
import './App.css';
import TypingTracker from './components/TypingTracker'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>R-typist</h2>
        </div>
        <TypingTracker />
      </div>
    );
  }
}

export default App;
