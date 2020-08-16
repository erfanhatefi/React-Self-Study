import React from 'react'
import './CharComponent.css'

const char = (props) => {

    return (
        <div className='Char' onClick={props.clicked}>
            {props.character}
        </div>
    )
}

export default char