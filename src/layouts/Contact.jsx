import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

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
                <FontAwesomeIcon icon={ faTwitter } />
            </Link>
        </div>
    )
}

export default Contact