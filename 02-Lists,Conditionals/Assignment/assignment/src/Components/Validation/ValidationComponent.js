import React from 'react'

const ValidationComponent = (props) => {
    let textStatus = null

    if(props.inputLength > 5){
        textStatus = (
            <p>Long Enough Text</p>
        )
    }else{
        textStatus =(
        <p>Short Text</p>
        )
    }

    return(
        <div>
            <p>Length of input is : {props.inputLength} </p>
            <div>{textStatus}</div>
        </div>
    )
}

export default ValidationComponent