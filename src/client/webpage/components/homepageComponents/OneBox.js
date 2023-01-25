import React from 'react';
import '../../styling/boxes.scss';

const OneBox = ({icon, title, text}) => {

    return (
        <div id='one-box-layout'>
            {icon}
            <h1 id='box-title' className='text-color'>{title}</h1>
            <p id='box-paragraph'>{text}</p>
        </div>
    )
}

export default OneBox;