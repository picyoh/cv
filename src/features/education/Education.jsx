import React from 'react'
import { educationDatas } from '../../datas/educationDatas'
import TimeLine from '../../components/timeLine/TimeLine'

import './education.css'

function Education() {
    // TODO: ajouter dropdown pour chaque content + dropdown entre 2022 et 2010 + inverser tableau
    return (
        <div className="education">
            <div className="titleContainer">
                <div className="titleLeft">
                    <h3>Education</h3>
                </div>
                <span className='educationThread'></span>
            </div>
            <TimeLine datas={educationDatas} />
        </div>
    )
}

export default Education