import React from 'react'

import { FaGraduationCap, FaMoneyBill } from "react-icons/fa"
import { ImBooks } from "react-icons/im"

function Timeline(props) {

    const { datas } = props;

    const iconTypes = [
        { name: "job", icon: <FaMoneyBill /> },
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
                <p>{year}</p>
            </div >
        )
    }

    const list = datas.map((element, index) => {

        const iconType = iconTypes.filter(iconType => iconType.name === element.type)[0];
        // TODO: hide jobs
        return (
            <div className="timeline__content" key={index}>
                <div className="timeline__content__left">
                    {iconType.name === "school" || "job" ?
                        <div className='content'>
                            <p>{element.infos}</p>
                            {iconSpan(iconType.icon)}
                        </div>
                        :
                        dateSpan(element.year)
                    }
                </div>
                <div className="timelien__content__right">
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
        <div className='timeline'>
            {list}
        </div>
    )
}

export default Timeline