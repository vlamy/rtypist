import React, { Component } from 'react';
import './App.css';
import ExerciseManager from './components/ExerciseManager'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>R-typist</h2>
        </div>
        <ExerciseManager />
      </div>
    );
  }
}

export default App;
