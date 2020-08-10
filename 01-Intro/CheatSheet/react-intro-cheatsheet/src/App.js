import React, { useState } from 'react';
import './App.css';
import Person from './Person/person.js'

const App = (props) => { //class can t be used, for instead, className is uesed!
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Erfan", age: "22"},
      {name: "ًRandkill", age: "23"}
    ]
  })

  const [otherState, setOtherState] = useState({otherState: "Some other state"})  //it could be an object or even text, 
                                                                                    //also we can have as many useState()s as we want

  const swithcNameHandler = () => {
    setPersonsState({
      persons: [
        {name: "Erfan Randkill", age: "23"},
        {name: "ًRandkill", age: "23"}
      ]
    })
  }

  console.log(personsState, otherState)

  
    return (
      <div className="App">
        <h1>Hello, this is my first React app!</h1>
        <p>Nicely working! </p>
        <button onClick={swithcNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>Hei there</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I m called React')); alternative way
}

export default App;