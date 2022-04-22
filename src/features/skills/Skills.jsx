import React from 'react'

import { IconContext } from 'react-icons'
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa"
import { SiRedux, SiVisualstudiocode, SiSass, SiAdobecreativecloud } from "react-icons/si"

import Html from "../../datas/assets/icons/html.png"
import Vsc from '../../datas/assets/icons/vsc.png'
import Figma from "../../datas/assets/icons/figma.png"

import './skills.css'

function Skills() {
    // TODO: colors
    const stack = [
        { name: "Html5 & Css3", src: Html },
        { name: "Sass", color: "#f06292", icon: <SiSass /> },
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
                console.log(item.src)
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