import React from 'react'
import './Layer.css'

const Layer = (props) => {
    return(
        <div className="Layer-Border">
            <h1>{props.info}</h1>
        </div>
    )
}

export default Layer;