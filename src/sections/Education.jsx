import React from 'react'
import { timelineDatas } from '../datas/timelineDatas'
import Timeline from '../components/timeline/Timeline'

function Education() {
    // TODO: supprimer education
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