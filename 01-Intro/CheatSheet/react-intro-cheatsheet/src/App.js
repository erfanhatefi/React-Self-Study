import React, { Component } from 'react';
import './App.css';
import Person from './Person/person.js'
class App extends Component { //class can t be used, for instead, className is uesed!
  state = {
    persons: [
      {name: "Erfan", age: "22"},
      {name: "ًRandkill", age: "23"}
    ]
  }



  swithcNameHandler = () => {
    this.setState({
      persons: [
        {name: "Erfan Randkill", age: "23"},
        {name: "ًRandkill", age: "23"}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello, this is my first React app!</h1>
        <p>Nicely working! </p>
        <button onClick={this.swithcNameHandler}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.swithcNameHandler}
        >Hei there</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[0].age}
        ></Person>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I m called React')); alternative way
  }
}

export default App;