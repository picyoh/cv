import React from 'react'

import "./card.css"

function Card(props) {

    const { name, src, index } = props;
    
    return (
        index % 2 === 0
            ?
            <div className="card">
                <div className="imgContainer">
                    <img alt={name} src={src} />
                </div>
                <h4>{name}</h4>
            </div>
            :
            <div className="card">
                <h4>{name}</h4>
                <div className="imgContainer">
                    <img alt={name} src={src} />
                </div>
            </div>
    )
}

export default Card