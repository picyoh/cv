import React from 'react'

import { GrCertificate } from "react-icons/gr"
import { FaGraduationCap } from "react-icons/fa"
import { ImBooks } from "react-icons/im"

import "./timeLine.css"

function TimeLine(props) {

    const { datas } = props;
    
    const iconTypes = [
        { name: "certification", icon: <GrCertificate /> },
        { name: "degree", icon: <FaGraduationCap /> },
        { name: "school", icon: <ImBooks /> },
    ];
    
    const list = datas.map((element, index) => {
        const iconType = iconTypes.filter(iconType => iconType.name === element.type)
        console.log(iconType)
        return (
            <div className="container" key={index}>
                <div className="date">
                    {element.year} :&emsp;
                </div>
                <div className="content">
                    <div className='icon'>
                        {iconType[0].icon}
                    </div>
                    {element.infos}.
                </div>
            </div>
        )
    });

    return (
        <div className='timeLine'>
            {list}
        </div>
    )
}

export default TimeLine