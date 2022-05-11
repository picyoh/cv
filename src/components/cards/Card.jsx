import React from 'react'

function Card(props) {

    const { name, src, link, index } = props;

    return (
        <a className="card" href={link}>
            {index === 0 ?
                <>
                    <div className="card__title__first">
                        <h4>{name}</h4>
                    </div>
                    <div className="card__first">
                        <div className="imgContainer">
                            <img alt={name} src={src} />
                        </div>
                    </div>
                </>
                :
                index % 2 === 1 ?
                    <>
                        <div className="card__content__left">
                            <div className="imgContainer">
                                <img alt={name} src={src} />
                            </div>
                        </div>
                        <div className="card__title__right">
                            <h4>{name}</h4>
                        </div>
                    </>
                    :
                    <>
                        <div className="card__title__left">
                            <h4>{name}</h4>
                        </div>
                        <div className="card__content__right">
                            <div className="imgContainer">
                                <img alt={name} src={src} />
                            </div>
                        </div>
                    </>
            }
        </a>
    )
}

export default Card