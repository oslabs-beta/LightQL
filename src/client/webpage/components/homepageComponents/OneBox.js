import React from 'react';
import '../../styling/boxes.scss';

const OneBox = ({icon, title, text}) => {
    
    const Icon = icon;

    return (
        <div id='one-box-layout'>
            <Icon alt='' className='box-icons'/>
            <h1 id='box-title' className='text-color'>{title}</h1>
            <p id='box-paragraph'>{text}</p>
        </div>
    )
}

export default OneBox;