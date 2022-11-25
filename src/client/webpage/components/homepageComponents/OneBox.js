import React from 'react';
import '../../styling/boxes.scss';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

const OneBox = ({icon, title, text}) => {

    console.log(icon)

    return (
        <div id='one-box-layout'>
            {/* {() => {return <`${icon}` />}} */}
            <h1 id='box-title' className='text-color'>{title}</h1>
            <p id='box-paragraph'>{text}</p>
        </div>
    )

}

export default OneBox;