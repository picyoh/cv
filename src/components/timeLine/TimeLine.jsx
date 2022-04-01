import React from 'react'

import { GrCertificate } from "react-icons/gr"
import { FaGraduationCap } from "react-icons/fa"
import { ImBooks } from "react-icons/im"

import "./timeLine.css"

function TimeLine(props) {

    const { datas } = props;

    const icons = [
        { certification: <GrCertificate /> },
        { cap: <FaGraduationCap /> },
        { books: <ImBooks /> }
    ]

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
        <ul className='timeLine'>
            {list}
            {/* <FontAwesomeIcon icon="fa-solid fa-file-certificate" /> */}
        </ul>
    )
}

export default TimeLine