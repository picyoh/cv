import React, { useState } from 'react'

import Accordion from './Accordion';

import { FaGraduationCap, FaMoneyBill } from "react-icons/fa"
import { ImBooks } from "react-icons/im"

function Timeline(props) {

    const { datas } = props;

    const [jobToggled, setToggle] = useState(false);

    const icons = [
        { type: "job", reactIcon: <FaMoneyBill /> },
        { type: "degree", reactIcon: <FaGraduationCap /> },
        { type: "school", reactIcon: <ImBooks /> }
    ];

    const toogleJobs = () => {
        if (jobToggled === false){
            return setToggle(true);
        }
        return setToggle(false);
    }

    const dateSpan = (year) => {
        return (
            <div className="date">
                <p>{year}</p>
            </div >
        )
    }

    const list = datas.map((element, index) => {
        const iconType = icons.filter(icon => icon.type === element.type)[0];
        return (
            <div className={`timeline__element ${(element.type === "job" & !jobToggled) ? "hidden" : ""}`} key={index}>
                <div className="timeline__element__left">
                    {index % 2 === 0 ?
                        <Accordion element={element} icon={iconType.reactIcon} />
                        :
                        dateSpan(element.year)
                    }
                </div>
                <div className="timeline__element__right">
                    {index % 2 !== 0 ?
                        <Accordion element={element} icon={iconType.reactIcon} />
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
            <button onClick={toogleJobs}>{jobToggled === true ? "Liste réduite" :"Voir la liste complète"}</button>
        </div>
    )
}

export default Timeline