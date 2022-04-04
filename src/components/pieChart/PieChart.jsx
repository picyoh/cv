import React from 'react'
import { Pie, PieChart } from 'recharts'
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact } from "react-icons/fa"
import { SiRedux } from "react-icons/si"

function SkillPie(props) {

    const { datas, techno } = props;

    const stack = [
        { name: "html", icon: <FaHtml5 /> },
        { name: "css", icon: <FaCss3Alt /> },
        { name: "js", icon: <FaJs /> },
        { name: "react", icon: <FaReact /> },
        { name: "redux", icon: <SiRedux /> },
        { name: "nodejs", icon: <FaNodeJs /> }
    ];

    const stackIcon = stack.filter((element) => element === techno)

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
            {stackIcon.icon}
        </PieChart>
    )
}

export default SkillPie