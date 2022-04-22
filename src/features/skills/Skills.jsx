import React from 'react'

import { IconContext } from 'react-icons'
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa"
import { SiRedux, SiAdobecreativecloud } from "react-icons/si"

import Html from "../../assets/icons/html.png"
import Sass from "../../assets/icons/sass.png"
import Vsc from '../../assets/icons/vsc.png'
import Figma from "../../assets/icons/figma.png"

import './skills.css'

function Skills() {
    const stack = [
        { name: "Html5", src: Html },
        { name: "Sass", src: Sass },
        { name: "JavaScript", color: "#ffd600", icon: <FaJs /> },
        { name: "React", color: "#61dafb", icon: <FaReact /> },
        { name: "Redux", color: "#7855bc", icon: <SiRedux /> },
        { name: "NodeJs", color: "#21a366", icon: <FaNodeJs /> },
    ];

    const softwares = [
        { name: "VSCode", src: Vsc },
        { name: "Figma", src: Figma },
        { name: "Adobe", color: "#f70000", icon: <SiAdobecreativecloud /> }
    ];

    const listItems = (items) => {
        return (
            items.map((item, index) => {
                return (
                    <div className="skill" key={index}>
                        <span className='skillIcon'>
                            {item.icon === undefined ?
                                <>
                                <img src={item.src} alt={item.name} />
                                </>
                                :
                                <IconContext.Provider value={{ color: item.color }}>
                                    <>
                                        {item.icon}
                                    </>
                                </IconContext.Provider>
                            }
                        </span>
                        <p className='skillName'>{item.name}</p>
                    </div>
                )
            })
        )
    }

    return (
        <section className='skills'>
            <div className="titleContainer">
                <span className='emptySpace'></span>
                <div className="title">
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