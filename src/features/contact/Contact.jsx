import React from 'react'
import { Link } from 'react-router-dom'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

import "./contact.css"

function Contact() {
    return (
        <section className="contact">
            <Link
                to="#"
                onClick={(e) => {
                    window.location.href = "mailto:picotyoh@gmail.com";
                    e.preventDefault();
                }}
            >
                <div className="rounded">
                    <SiGmail />
                </div>
            </Link>
            <Link to="https://github.com/picyoh">
                <FaGithub />
            </Link>
            <Link to="#">
                <div className="rounded">
                    <FaLinkedinIn />
                </div>
            </Link>
        </section>
    )
}

export default Contact