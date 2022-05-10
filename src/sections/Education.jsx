import React from 'react'
import { timelineDatas } from '../datas/timelineDatas'
import Timeline from '../components/Timeline'

function Education() {
    // TODO: ajouter dropdown pour chaque content + dropdown entre 2022 et 2010 + inverser tableau
    return (
        <div className="education">
            <div className="title">
                <h3>Education</h3>
            </div>
            <Timeline datas={timelineDatas} />
        </div>
    )
}

export default Education