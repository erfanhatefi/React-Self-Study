import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layer from './Components/Layers/Layer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><Layer/></div><div><Layer/></div>
      </div>
    );
  }
}

export default App;