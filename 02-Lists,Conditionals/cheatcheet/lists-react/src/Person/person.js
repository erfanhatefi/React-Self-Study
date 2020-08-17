import React from 'react'
import Radium from 'radium'
import './Person.css'

const person = (props) => {

    const myStyle = {
        '@media (min-width: 500px)' :{
            wodth: '400px'
        }
    }
    return(
        <div className='Person'>
            <p onClick={props.click}>I`m  {props.name} and I`m {props.age} years old</p>
            <p>{props.children}</p>
            <input onChange={props.change} value={props.name}/>
        </div>
    )
}

export default Radium(person);