import React from 'react'

import "./timeLine.css"

function TimeLine(props) {

    const { datas } = props;
    const list = datas.map((element, index) => {
        return <li key={index}>
            <span className="year-item">
                {element.year} :&emsp;
            </span>
            <span className="infos">
                {element.infos} .
            </span>
        </li>
    });

    return (
        <ul className='timeLine'>{list}</ul>
    )
}

export default TimeLine