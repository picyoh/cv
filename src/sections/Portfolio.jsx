import React from 'react'

import Card from '../components/cards/Card'

import sportsee from "../assets/sportsee.png"
import fisheye from '../assets/fisheye.png'
import kasa from '../assets/kasa.png'
import ohmyfood from '../assets/ohmyfood.png'

function Portfolio() {

    const portfolioDatas = [
        { name: "SportSee", src: sportsee, link: "https://picyoh.github.io/YohannPicot_12_30112021/" },
        { name: "FishEye", src: fisheye, link: "https://picyoh.github.io/YohannPicot_6_14072021/" },
        { name: "Kasa", src: kasa, link: "https://picyoh.github.io/newMSD/" },
        { name: "OhmyFood", src: ohmyfood, link: "https://picyoh.github.io/YohannPicot_11_08112021/" }
    ]

    const cards = portfolioDatas.map((element, index) => {
        return (
            <Card name={element.name} src={element.src} link={element.link} index={index} key={index} />
        )
    })

    return (
        <section className='portfolio'>
            <div className="title">
                <h3>Portfolio</h3>
            </div>
            {cards}
        </section>
    )
}

export default Portfolio