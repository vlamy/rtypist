import React, { Component } from 'react';
import './App.sass';
import ExerciseManager from './components/ExerciseManager'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExerciseManager />
      </div>
    );
  }
}

export default App;
