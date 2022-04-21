import React from 'react'

import "./card.css"

function Card(props) {

    const { name, src, index } = props;

    return (
        index === 0 ?
            <div className="card">
                <div className="cardTitle">
                    <h4>{name}</h4>
                </div>
                <div className="cardFirstContent">
                    <div className="imgContainer">
                        <img alt={name} src={src} />
                    </div>
                </div>
            </div>
            :
            index % 2 === 1 ?
                <div className="card">
                    <div className="cardContentLeft">
                        <div className="imgContainer">
                            <img alt={name} src={src} />
                        </div>
                    </div>
                    <div className="cardTitle">
                        <h4>{name}</h4>
                    </div>
                </div>
                :
                <div className="card">
                    <div className="cardTitle">
                        <h4>{name}</h4>
                    </div>
                    <div className="cardContentRight">
                        <div className="imgContainer">
                            <img alt={name} src={src} />
                        </div>
                    </div>
                </div>
    )
}

export default Card