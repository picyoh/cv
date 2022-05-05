import React from 'react'

import logo  from "../../assets/illuoimnow.jpg"
import "./aboutMe.css"

function AboutMe() {
    return (
        <section className='aboutMe'>
            <div className="photo">
                <img src={logo} alt="Yohann Picot" />
            </div>
            <div className="intro">
                <div className="id">
                    <h1>Yohann Picot</h1>
                    <h2>Developpeur Front-End</h2>
                </div>
                <div className="text">
                    <p>
                        Curieux et volontaire, j'aime expérimenter et apprendre de nouvelles choses.
                        Mon parcours atypique me permet de m'adapter et de m'integrer assez vite a de nouveaux environements.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe