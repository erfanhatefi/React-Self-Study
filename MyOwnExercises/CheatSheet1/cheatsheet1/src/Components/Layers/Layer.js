import React from 'react'
import './Layer.css'

const Layer = (props) => {
    return(
        <div className="Layer-Border">
            <h1 style={{margin: '20%'}}>{props.info}</h1>
            <input className="InputBox" style={{width:'80%', margin: 'auto'}} onChange={props.change}></input>
            <button className="DeleteButton" onClick={props.delete}>-</button>
        </div>
    )
}

export default Layer;