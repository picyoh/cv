import React from 'react'

function Card(props) {

    const { name, src, index } = props;

    return (
        index === 0 ?
            <div className="card">
                <div className="card__title__first">
                    <h4>{name}</h4>
                </div>
                <div className="card__first">
                    <div className="imgContainer">
                        <img alt={name} src={src} />
                    </div>
                </div>
            </div>
            :
            index % 2 === 1 ?
                <div className="card">
                    <div className="card__content__left">
                        <div className="imgContainer">
                            <img alt={name} src={src} />
                        </div>
                    </div>
                    <div className="card__title__right">
                        <h4>{name}</h4>
                    </div>
                </div>
                :
                <div className="card">
                    <div className="card__title__left">
                        <h4>{name}</h4>
                    </div>
                    <div className="card__content__right">
                        <div className="imgContainer">
                            <img alt={name} src={src} />
                        </div>
                    </div>
                </div>
    )
}

export default Card