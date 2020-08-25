import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {

    let btnClass = ''

    if(props.showPersonsStatus){
      btnClass=classes.Red
    }

    const assignedClasses = [];
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red)
    }else{
      assignedClasses.push(classes.bold)
    }

    return(
        <div className={classes.Cockpit}>
            <h1>Hello, this is my first React app!</h1>
            <p className={assignedClasses.join(' ')}>Nicely working! </p>
            <button className={btnClass} onClick={props.clicked}>Switch Name</button>
        </div>
    )

}

export default cockpit;