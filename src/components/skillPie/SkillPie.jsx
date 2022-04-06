import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'

function SkillPie(props) {

    const { skill } = props;

    // Set transparent Cell 
    const data = [
        { name: "full", value: skill.prc },
        { name: "empty", value: 100 - skill.prc }
    ]
    // Set color
    const secondary = getComputedStyle(document.documentElement).getPropertyValue("--secondary-color");
    const colors = [secondary, "transparent"]
    // TODO: autosizing PieChart and Pie
    return (
        <PieChart width={144} height={144} >
            <Pie
                dataKey="value"
                data={data}
                startAngle={450}
                endAngle={100}
                outerRadius={64}
                innerRadius={48}
                cx={72}
                cy={72}
                isAnimationActive={true}
                fill="#E63946"
                stroke='transparent'
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
            </Pie>
            <Pie
                dataKey="value"
                data={data}
                startAngle={450}
                endAngle={90}
                outerRadius={64}
                innerRadius={48}
                cx={72}
                cy={72}
                isAnimationActive={true}
                fill="#E63946"
                stroke='transparent'
                cornerRadius={10}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
            </Pie>
        </PieChart >
    )
}

export default SkillPie