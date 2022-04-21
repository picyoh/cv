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

    const iconSpan = (icon) => {
        return (
            <span className='icon'>
                {icon}
            </span>
        )
    }

    const dateSpan = (year) => {
        return (
            <div className="date">
                {year}
            </div >
        )
    }
    
    // TODO refactor component

    const list = datas.map((element, index) => {

        const iconType = iconTypes.filter(iconType => iconType.name === element.type)[0];

        return (
            <div className="timeLineContainer" key={index}>
                <div className="contentLeft">
                    {iconType.name === "school" ?
                        <div className='content'>
                            <p>{element.infos}</p>
                            {iconSpan(iconType.icon)}
                        </div>
                        :
                        dateSpan(element.year)
                    }
                </div>
                <div className="contentRight">
                    {iconType.name === "degree" ?
                        <div className='content'>
                            {iconSpan(iconType.icon)}
                            <p>{element.infos}</p>
                        </div>
                        :
                        dateSpan(element.year)
                    }
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