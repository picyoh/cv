import React from 'react'

function TimeLine(props) {
    
    const { datas } = props;
    const list = datas.map((element, index) => {
        return <li key={index}> {element.year} : {element.infos} </li>
    });

    return (
        <ul className='timeLine'>{list}</ul>
    )
}

export default TimeLine