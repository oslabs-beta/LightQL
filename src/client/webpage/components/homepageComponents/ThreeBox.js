import React from 'react';
import '../../styling/boxes.scss'
import OneBox from './OneBox'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

const ThreeBox = () => {

    const easyTitle = 'Easy to use';
    const fastTitle = 'Ultra-fast';
    const mutationTitle = 'Mutation storing'

    const easyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper ut ligula ut ornare. Suspendisse.';
    const fastText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper ut ligula ut ornare. Suspendisse.';
    const mutationText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper ut ligula ut ornare. Suspendisse.';

    return (
        <div id='three-box-layout'>
            <OneBox icon={ThumbUpAltOutlinedIcon} title={easyTitle} text={easyText}/>
            <OneBox icon={ElectricBoltIcon} title={fastTitle} text={fastText}/>
            <OneBox icon={ArchiveOutlinedIcon} title={mutationTitle} text={mutationText}/>
        </div>
    )

}

export default ThreeBox;