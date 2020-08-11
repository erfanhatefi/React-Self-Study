import React from 'react'
import './OutputComponent.css'

const OutputComponent = (props) => {
    return(
        <div className='Output'>
            <h1>Username: {props.username}</h1>
        </div>
    )
}

export default OutputComponent;