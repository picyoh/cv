import React from 'react'

import logo  from "../assets/illuoimnow.jpg"

function AboutMe() {
    return (
        <section className='aboutme'>
            <div className="aboutme__picture">
                <img src={logo} alt="Yohann Picot" />
            </div>
            <div className="aboutme__intro">
                <div className="aboutme__intro__id">
                    <h1>Yohann Picot</h1>
                    <h2>Developpeur Front-End</h2>
                </div>
                <div className="aboutme__intro__text">
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