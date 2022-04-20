import React from 'react'

import Card from '../../components/cards/Card'

function Portfolio() {

    const portfolioDatas = [
        {name:"Ma souris d'ordinateur", src:"firefox.png", link:"https://picyoh.github.io/newMSD/"},
        {name:"Cadet escape", src:"firefox.png", link:"https://picyoh.github.io/cadetE/"},
        {name:"CubIso", src:"firefox.png", link:"https://picyoh.github.io/cubiso/"},
        {name:"FishEye", src:"fishEye.png", link:"https://picyoh.github.io/YohannPicot_6_14072021/"},
        {name:"SportSee", src:"firefox.png", link:"https://picyoh.github.io/YohannPicot_12_30112021/"},
        {name:"Kasa", src:"firefox.png", link:"https://picyoh.github.io/YohannPicot_11_08112021/"}
    ]

    const image = portfolioDatas.map((element, index) => {
        return (
            <Card name={element.name} src={element.src} index={index} key={index} />
        )
    })
    return (
        <div className='portfolio'>
                {image}
        </div>
    )
}

export default Portfolio