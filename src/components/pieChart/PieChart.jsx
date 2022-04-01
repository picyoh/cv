import React from 'react'

import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact} from "react-icons/fa"

function PieChart(){

    const stack = [
        { html: <FaHtml5 /> },
        { css: <FaCss3Alt /> },
        { js: <FaJs /> },
        { nodejs: <FaNodeJs /> },
        { react: <FaReact /> }
    ]
    return(
        <div>PieChart</div>
    )
}

export default PieChart