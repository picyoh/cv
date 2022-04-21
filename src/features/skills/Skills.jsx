import React from 'react'

import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaFigma } from "react-icons/fa"
import { SiRedux, SiVisualstudiocode, SiSass, SiAdobeillustrator } from "react-icons/si"

import './skills.css'

function Skills() {

    const stack = [
        { name: "Html5", icon: <FaHtml5 /> },
        { name: "Css3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Sass", icon: <SiSass /> },
        { name: "NodeJs", icon: <FaNodeJs /> },
    ];

    const softwares = [
        { name: "VSCode", icon: <SiVisualstudiocode /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "Illustrator", icon: <SiAdobeillustrator /> }
    ];

    const listItems = (items) => {
        return (
            items.map((item, index) => {
                return (
                    <div className="skill" key={index}>
                        <span className='skillIcon'>
                            {item.icon}
                        </span>
                        <p>{item.name}</p>
                    </div>
                )
            })
        )
    }

    return (
        <section className='skills'>
            <div className="skillTitleContainer">
                <span className='emptySpace'></span>
                <div className="skillTitle">
                    <h3>Skills</h3>
                </div>
            </div>
            <div className='skillList'>
                {listItems(stack)}
            </div>
            <div className="skillList">
                {listItems(softwares)}
            </div>
        </section>
    )
}

export default Skills