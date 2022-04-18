import React from 'react'

import Card from '../../components/cards/Card'

function Portfolio() {
    // const image = htmlToImage.toPng()
    const portfolioDatas = [
        {name:"first", src:""},
        {name:"second", src:""},
        {name:"third", src:""},
        {name:"fourth", src:""},
        {name:"fifth", src:""},
        {name:"sixth", src:""}
    ]

    const image = portfolioDatas.map((element) => {
        return (
            <Card />
        )
    })
    return (
        <div className='portfolio'>
            <div className='project-image'>
                {/* {image} */}
            </div>
        </div>
    )
}

export default Portfolio