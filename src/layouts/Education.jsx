import React from 'react'
import { educationDatas } from '../datas/educationDatas'
import TimeLine from '../components/TimeLine'

function Education() {
    return (
        <div className="education">
            <TimeLine datas={educationDatas} />
        </div>
    )
}

export default Education