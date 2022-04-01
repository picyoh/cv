import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faGraduationCap, faFilec, faBookReader } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faCss3Alt } from '@fortawesome/free-brands-svg-icons'

import "./timeLine.css"

function TimeLine(props) {

    const { datas } = props;

    const icons = [
        { certification: <FontAwesomeIcon icon="fa-solid fa-file-certificate" /> },
        { cap: <FontAwesomeIcon icon={ faGraduationCap } /> },
        { books: <FontAwesomeIcon icon={ faBookReader } /> },
        { html: <FontAwesomeIcon icon={ faHtml5 } /> },
        { css: <FontAwesomeIcon icon={ faCss3Alt } /> },
        { js: <FontAwesomeIcon icon={ faJs } /> },
        { nodejs: <FontAwesomeIcon icon={ faNodeJs } /> },
        { react: <FontAwesomeIcon icon={ faReact } /> },

    ]

    const list = datas.map((element, index) => {
        return <li key={index}>
            <span className="year-item">
                {element.year} :&emsp;
            </span>
            <span className="infos">
                {element.infos} .
                {icons.books}
                {icons.diploma}
                {icons.cap}
                {icons.html}
            </span>
        </li>
    });

    return (
        <ul className='timeLine'>{list}</ul>
    )
}

export default TimeLine