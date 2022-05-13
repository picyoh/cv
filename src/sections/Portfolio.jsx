import React from 'react'

import Title from '../components/title/Title'
import Card from '../components/cards/Card'

import sportsee from "../assets/sportsee.png"
import fisheye from '../assets/fisheye.png'
import kasa from '../assets/kasa.png'
import ohmyfood from '../assets/ohmyfood.png'

function Portfolio() {

    const portfolioDatas = [
        { name: "SportSee", src: sportsee, link: "https://picyoh.github.io/YohannPicot_12_30112021/" },
        { name: "FishEye", src: fisheye, link: "https://picyoh.github.io/YohannPicot_6_14072021/" },
        { name: "Kasa", src: kasa, link: "https://picyoh.github.io/YohannPicot_11_08112021/" },
        { name: "OhmyFood", src: ohmyfood, link: "https://picyoh.github.io/YohannPicot_3_28052021/" }
    ]

    const cards = portfolioDatas.map((element, index) => {
        return (
            <Card name={element.name} src={element.src} link={element.link} index={index} key={index} />
        )
    })

    return (
        <section className='portfolio'>
            <Title title={"Portfolio"} />
            {cards}
        </section>
    )
}

export default Portfolio