import React from 'react';
import SingleTile from './aboutUsComponents/SingleTile';
import '../styling/aboutUs.scss';

const cassidy = require('../../../assets/cassidy.png')
const drew = require('../../../assets/drew.png');
const pierce = require('../../../assets/pierce.png');
const cyrus = require('../../../assets/cyrus.png');
const rhea = require('../../../assets/rhea.png');

const AboutUs = () => {

    return (
        <div id='about-us-page-layout'>
            <h1 id="about-us-title">Meet the Team</h1>
            <section id='about-us-layout'>
                    <SingleTile 
                        key='Cassidy' 
                        name='Cassidy Johnson' 
                        email='cassidyrose56@gmail.com'
                        githubLink='https://github.com/cassidyrose56'
                        linkedInLink='https://www.linkedin.com/in/cassidy-r-johnson/'
                        headshot={cassidy} 
                    />
                    <SingleTile 
                        key='Drew' 
                        name='Drew Tucker' 
                        email='drewtucker19@gmail.com'
                        githubLink='https://github.com/Drew-tucker33'
                        linkedInLink='https://www.linkedin.com/in/drew-t-4369199b/'
                        headshot={drew} 
                    />
                    <SingleTile 
                        key='Pierce' 
                        name='Pierce Heska' 
                        email='pierceheska@gmail.com'
                        githubLink='https://github.com/pheska'
                        linkedInLink='https://www.linkedin.com/in/pheska/'
                        headshot={pierce} 
                    /> 
                    <SingleTile 
                        key='Cyrus' 
                        name='Cyrus Yari' 
                        email='cyrus.brk@gmail.com'
                        githubLink='https://github.com/cyrusyari'
                        linkedInLink='https://www.linkedin.com/in/cyrusyari/'
                        headshot={cyrus} 
                    /> 
                    <SingleTile 
                        key='Rhea' 
                        name='Rhea Wu' 
                        email='rheawu1212@gmail.com'
                        githubLink='https://github.com/rheawu1212'
                        linkedInLink='https://www.linkedin.com/in/rheawu-tech/'
                        headshot={rhea} 
                    /> 
            </section> 
        </div>
        )
}

export default AboutUs;