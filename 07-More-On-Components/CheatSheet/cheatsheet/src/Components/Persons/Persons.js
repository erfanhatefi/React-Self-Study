import React from 'react'
import Person from './Person/person.js'

const persons = (props) => {
    return(
        props.persons.map((person, index) => {
            return(
                <Person
                click={() => props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => props.changed(event, person.id)}
                />
            )
          })
    );
}

export default persons;