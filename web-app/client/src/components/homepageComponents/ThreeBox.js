import React from 'react';
import '../../styling/boxes.scss'
import OneBox from './OneBox'


const ThreeBox = () => {

    const easyIcon = 'ElectricBoltIcon';
    const fastIcon = 'ThumbUpAltOutlinedIcon';
    const mutationIcon = 'ArchiveOutlinedIcon';

    const easyTitle = 'Easy to use';
    const fastTitle = 'Ultra-fast';
    const mutationTitle = 'Mutation storing'

    const easyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper ut ligula ut ornare. Suspendisse.';
    const fastText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper ut ligula ut ornare. Suspendisse.';
    const mutationText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper ut ligula ut ornare. Suspendisse.';

    return (
        <div id='three-box-layout'>
            <OneBox icon={easyIcon} title={easyTitle} text={easyText}/>
            <OneBox icon={fastIcon} title={fastTitle} text={fastText}/>
            <OneBox icon={mutationIcon} title={mutationTitle} text={mutationText}/>
        </div>
    )

}

export default ThreeBox;