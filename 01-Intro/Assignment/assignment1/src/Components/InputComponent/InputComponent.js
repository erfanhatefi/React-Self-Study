import React from 'react'

const InputComponent = (props) => {
    return(
        <div>
            <input type='text' onChange={props.change} value={props.username}></input>
        </div>
    )
}

export default InputComponent;