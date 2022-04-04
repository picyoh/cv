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
        return (
            <div className="timeLineContainer" key={index}>
                <div className="contentLeft">
                    {iconType[0].name === "school" ?
                        <div className='content'>
                            <span className="text">
                                {element.infos}.
                            </span>
                            <span className='icon'>
                                {iconType[0].icon}
                            </span>
                        </div>
                        :
                        <div className="date">
                            {element.year} &emsp;
                        </div>
                    }
                </div>
                <div className="contentRight">
                    {iconType[0].name === "degree" ?
                        <div className='content'>
                            <span className='icon'>
                                {iconType[0].icon}
                            </span>
                            <span className="text">
                                {element.infos}.
                            </span>
                        </div>
                        :
                        <div className="date">
                            {element.year} &emsp;
                        </div>
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