import React, { Component } from 'react';
import './App.css';
import Person from './Person/person.js'
class App extends Component { //class can t be used, for instead, className is uesed!
  state = {
    persons: [
      {id: '9j3fh', name: "Erfan", age: "22"},
      {id: 'bg47f', name: "ًRandkill", age: "23"},
      {id: 'v7i6bi', name: "Randkill 3", age: "24"}
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

  showHideButtonHandler = () =>{
    const personStatus = this.state.showPersons
    this.setState({showPersons: !personStatus})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice()
    //ALTERNATIVE:
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  render() {
    let persons = null

    if (this.state.showPersons === true) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return(
                <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.key}
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