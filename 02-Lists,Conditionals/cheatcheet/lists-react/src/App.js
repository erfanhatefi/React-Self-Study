import React, { Component } from 'react';
import './App.css';
import Person from './Person/person.js'
class App extends Component { //class can t be used, for instead, className is uesed!
  state = {
    persons: [
      {name: "Erfan", age: "22"},
      {name: "ًRandkill", age: "23"},
      {name: "Randkill 3", age: "24"}
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: "23"},
        {name: "ًRandkill", age: "23"},
        {name: "Randkill 3", age: "24"}
      ]
    })
  }

  swithcNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: "23"},
        {name: "ًRandkill", age: "23"},
        {name: "Randkill 3", age: "24"}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello, this is my first React app!</h1>
        <p>Nicely working! </p>
        <button onClick={() => this.swithcNameHandler('Randkillli')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.swithcNameHandler}
          change={this.nameChangeHandler}
        >Hei there</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.swithcNameHandler.bind(this, 'Randkilllllll')}
        ></Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.swithcNameHandler.bind(this, 'Randkilll')}
        ></Person>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I m called React')); alternative way
  }
}

export default App;