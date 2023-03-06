import React from 'react';
import '../../styling/boxes.scss';

interface Props {
    icon: React.ReactNode;
    title: string;
    text: string;
}

const OneBox: React.FC<Props> = ({ icon, title, text }) => {

    return (
        <div id='one-box-layout'>
            {icon}
            <h1 id='box-title' className='text-color'>{title}</h1>
            <p id='box-paragraph'>{text}</p>
        </div>
    )
}

export default OneBox;

// changes made during ts transition
    // added props interface and React.FC type