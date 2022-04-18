import React from 'react'
import { educationDatas } from '../../datas/educationDatas'
import TimeLine from '../../components/timeLine/TimeLine'

import './education.css'

function Education() {
    return (
        <div className="education">
            <h3>Education</h3>
            <TimeLine datas={educationDatas} />
        </div>
    )
}

export default Education