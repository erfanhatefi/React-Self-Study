import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons.js'
import Cockpit from '../Components/Cockpit/Cockpit.js'
class App extends Component { //class can t be used, for instead, className is uesed!
  state = {
    persons: [
      {id: '9j3fh', name: "Erfan", age: "22"},
      {id: 'bg47f', name: "ًRandkill", age: "23"},
      {id: 'v7i6bi', name: "Randkill 3", age: "24"}
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return (p.id === id)
    })
    //console.log(personIndex)
    
    const tempPersons = [...this.state.persons]

    const newName = event.target.value
    tempPersons[personIndex].name = newName
    //console.log(tempPersons[personIndex].name)

    this.setState({persons: tempPersons})

    //Max;s approach
    // const personIndex = this.state.persons.findIndex(p => {
    //   return p.id === id
    // })

    // const person = {
    //   ...this.state.person[personIndex]
    // }

    
    // // ALTERNATIVE const person = Object.assign({}, this.state.persons[personIndex])

    // person.name = event.target.value

    // const persons = [...this.state.persons]
    // persons[personIndex] = person

    // this.setState({ persons: persons})
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
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}/>
          </div>
      )
    }

    

    return (
      <div className={classes.App}>
        <Cockpit 
        clicked={this.showHideButtonHandler}
        persons={this.state.persons}
        showPersonsStatus={this.state.showPersons}/>
        {persons}
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I m called React')); alternative way
  }
}

export default App;