import React, { Component } from 'react';
import './App.css';
import Person from './Person/person.js'
class App extends Component { //class can t be used, for instead, className is uesed!
  render() {
    return (
      <div className="App">
        <h1>Hello, this is my first React app!</h1>
        <p>Nicely working!</p>
        <Person/>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I m called React')); alternative way
  }
uu}

export default App;