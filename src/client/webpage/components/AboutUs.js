import React from 'react';
import SingleTile from './aboutUsComponents/SingleTile';
import '../styling/aboutUs.scss';

const AboutUs = () => {

    return (
        <div id='aboutUsLayout'>
            <section id='topOfPage'>
                <SingleTile key='Cassidy' headshot='ex' />
                <SingleTile key='Drew' headshot='ex' />
                <SingleTile key='Pierce' headshot='ex' /> 
            </section>
            <section id='bottomOfPage'>
                <SingleTile key='Cyrus' headshot='ex' /> 
                <SingleTile key='Rhea' headshot='ex' /> 
            </section>
            
        </div>
        
    )
    
}

export default AboutUs;