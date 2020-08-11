import React, { Component } from 'react';
import './App.css';
import Person from './Person/person.js'
class App extends Component { //class can t be used, for instead, className is uesed!
  state = {
    persons: [
      {name: "Erfan", age: "22"},
      {name: "ًRandkill", age: "23"},
      {name: "Randkill 3", age: "24"}
    ],
    showPersons: false
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

  showHideButtonHandler = () => {
    let personVisibility = this.state.showPersons
    this.setState({showPersons: !personVisibility})
  }

  render() {
    let persons = null

    if (this.state.showPersons === true) {
      persons = (
        <div>
          {
            this.state.persons.map(person => {
              return(
                <Person
                name={person.name}
                age={person.age}
                />
              )
            })
          }
          </div>
      )
    }
    
    return (
      <div className="App">
        <h1>Hello, this is my first React app!</h1>
        <p>Nicely working! </p>
        <button onClick={this.showHideButtonHandler}>Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I m called React')); alternative way
  }
}

export default App;