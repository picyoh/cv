import React from 'react'

function Title(props) {
    const {title} = props;
    return (
        <div className="title">
            <div className="title__container">
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default Title