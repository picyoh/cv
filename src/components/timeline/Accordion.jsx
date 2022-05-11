import React, { useState } from 'react'

function Accordion(props) {
    const { element, icon } = props;

    const [clicked, setClicked] = useState(false);
    const handleAccordion = (e) => {
        if (clicked === false) {
            return setClicked(true);
        }
        return setClicked(false)
    }
    return (
        <div className='content' onClick={handleAccordion}>
            <div className="content__header">
                <p>{element.title}</p>
                <span className='icon'>
                    {icon}
                </span>
            </div>
            <div className={`content__accordion ${(clicked === false) ? "hidden" : ""}`}>
                <p>{element.place}</p>
                <p>{element.infos}</p>
            </div>
        </div>
    )
}

export default Accordion