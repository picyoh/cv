import React from 'react'

import SkillPie from '../../components/skillPie/SkillPie'

import { skillsDatas, sharedPie } from '../../datas/skillsDatas'
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact } from "react-icons/fa"
import { SiRedux } from "react-icons/si"

import './skills.css'

function Skills() {

    const stack = [
        { name: "html", icon: <FaHtml5 /> },
        { name: "css", icon: <FaCss3Alt /> },
        { name: "js", icon: <FaJs /> },
        { name: "react", icon: <FaReact /> },
        { name: "redux", icon: <SiRedux /> },
        { name: "nodejs", icon: <FaNodeJs /> }
    ];

    const skillList = skillsDatas.map((skill, index) => {
        const skillIcon = stack.filter((element) => element.name === skill.name)[0];
        return (
            <div className='skill' key={index}>
                <SkillPie skill={skill} />
                <div className="skillIcon">
                    {skillIcon.icon}
                </div>
            </div>
        )
    })

    return (
        <div className='skills'>
            <h3>Skills</h3>
            {skillList}
        </div>
    )
}

export default Skills