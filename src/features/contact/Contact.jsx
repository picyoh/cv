import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faReddit } from '@fortawesome/free-brands-svg-icons'

import "./contact.css"

function Contact() {
    return (
        <div className="contact">
            <Link to="https://github.com/picyoh">
                <FontAwesomeIcon icon={ faGithub } />
            </Link>
            <Link to="https://github.com/picyoh">
                <FontAwesomeIcon icon={ faLinkedin } />
            </Link>
            <Link to="https://github.com/picyoh">
                <FontAwesomeIcon icon={ faReddit } />
            </Link>
        </div>
    )
}

export default Contact