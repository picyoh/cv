import React from 'react'

import Card from '../../components/cards/Card'

import './portfolio.css'

import firefox from '../../assets/firefox.png'
import fishEye from '../../assets/fishEye.png'

function Portfolio() {

    const portfolioDatas = [
        { name: "Ma souris d'ordinateur", src: firefox, link: "https://picyoh.github.io/newMSD/" },
        { name: "Cadet escape", src: firefox, link: "https://picyoh.github.io/cadetE/" },
        { name: "CubIso", src: firefox, link: "https://picyoh.github.io/cubiso/" },
        { name: "FishEye", src: fishEye, link: "https://picyoh.github.io/YohannPicot_6_14072021/" },
        { name: "SportSee", src: firefox, link: "https://picyoh.github.io/YohannPicot_12_30112021/" },
        { name: "Kasa", src: firefox, link: "https://picyoh.github.io/YohannPicot_11_08112021/" }
    ]

    const cards = portfolioDatas.map((element, index) => {
        return (
            <Card name={element.name} src={element.src} index={index} key={index} />
        )
    })
    
    return (
        <section className='portfolio'>
            <div className="portfolio__container">
                <span className='emptySpace'></span>
                <div className="title">
                    <h3>Portfolio</h3>
                </div>
            </div>
            { cards }
        </section>
    )
}

export default Portfolio