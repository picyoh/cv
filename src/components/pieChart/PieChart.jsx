import React from 'react'
import { Pie, PieChart } from 'recharts'
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact } from "react-icons/fa"
import { SiRedux } from "react-icons/si"

function SkillPie(props) {

    const { datas, techno } = props;

    const stack = [
        { html: <FaHtml5 /> },
        { css: <FaCss3Alt /> },
        { js: <FaJs /> },
        { react: <FaReact /> },
        { redux: <SiRedux /> },
        { nodejs: <FaNodeJs /> }
    ];

    const icon = stack.filter((element)=> element === techno)

    return (
        <PieChart>
            <Pie 
            data={datas} 
            dataKey={techno}
            isAnimationActive={false}
            cx="50%" 
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label 
            />
            { icon }
        </PieChart>
    )
}

export default SkillPie