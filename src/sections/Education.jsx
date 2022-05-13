import React from 'react'

import Title from '../components/title/Title'
import { timelineDatas } from '../datas/timelineDatas'
import Timeline from '../components/timeline/Timeline'

function Education() {
    return (
        <div className="education">
            <Title title={"Career path"} />
            <Timeline datas={timelineDatas} />
        </div>
    )
}

export default Education