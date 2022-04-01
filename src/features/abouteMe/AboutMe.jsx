import React from 'react'

import "./aboutMe.css"

function AboutMe() {
    return (
        <div className='aboutMe'>
            <h5>Curriculum Vitae</h5>
            <h1>Developpeur javaScript React</h1>
            <div className="photo">
                <img src="illuoimnow.jpg" alt="Yohann Picot" />
            </div>
            <h3>Yohann Picot</h3>
            <p>
                Curieux et volontaire, j'aime expérimenter et apprendre de nouvelles choses.
                Mon parcours atypique me permet de m'adapter et de m'integrer assez vite a de nouveaux environements.
            </p>
        </div>
    )
}

export default AboutMe