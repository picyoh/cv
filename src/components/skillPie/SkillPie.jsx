import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'

function SkillPie(props) {

    const { skill } = props;

    // Set transparent Cell 
    const data = [
        { name: "full", value: skill.prc, },
        { name: "empty", value: 100 - skill.prc }
    ]
    // Set color
    // const secondary = getComputedStyle(element).getPropertyValue("--ma-variable");
    // console.log(secondary)
    const colors = []
    // TODO: Color Array for full and empty
    // TODO: customize labels with Icon
    // TODO: autosizing PieChart and Pie
    return (
        <PieChart width={144} height={144} >
            <Pie
                dataKey="value"
                data={data}
                startAngle={180}
                endAngle={-180}
                outerRadius={64}
                innerRadius={48}
                cx={72}
                cy={72}
                isAnimationActive={false}
                fill={"#E63946"}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="blue" />
                ))}
            </Pie>
        </PieChart >
    )
}

export default SkillPie