import React from 'react'

import "./aboutMe.css"

function AboutMe() {
    return (
        <div className='aboutMe'>
            <div className="myPhoto">
                <img src="../../datas/assets/illuoimnow.jpg" alt="Yohann Picot" />
            </div>
            <div className="myId">
                <h1>Yohann Picot</h1>
                <h2>Developpeur javaScript React</h2>
            </div>
            <div className="short">
                <p>
                    Curieux et volontaire, j'aime expérimenter et apprendre de nouvelles choses.
                    Mon parcours atypique me permet de m'adapter et de m'integrer assez vite a de nouveaux environements.
                </p>
            </div>
        </div>
    )
}

export default AboutMe