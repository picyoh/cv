import React from 'react'

function TimeLine(props) {
    
    const { datas } = props;
    const list = datas.map((element) => {
        return <li> {element.year} : {element.infos} </li>
    });

    return (
        <ul className='timeLine'>{list}</ul>
    )
}

export default TimeLine