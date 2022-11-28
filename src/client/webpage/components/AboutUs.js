import React from 'react';
import SingleTile from './aboutUsComponents/SingleTile';
import '../styling/aboutUs.scss';

const exPic = require('../../../assets/prof-pic-placeholder.jpeg');

const drew = require('../../../assets/drew.png');

const cyrus = require('../../../assets/cyrus.png');
const rhea = require('../../../assets/rhea.png');

const AboutUs = () => {

    return (
        <div>
            <h1 id="aboutUsTitle">Meet the Team</h1>
            <section id='aboutUsLayout'>
                    <SingleTile 
                        key='Cassidy' 
                        name='Cassidy Johnson' 
                        email='cassidyrose56@gmail.com'
                        githubLink='https://github.com/cassidyrose56'
                        linkedInLink='https://www.linkedin.com/in/cassidy-r-johnson/'
                        headshot={exPic} 
                    />
                    <SingleTile 
                        key='Drew' 
                        name='Drew Tucker' 
                        email='example@gmail.com'
                        githubLink='https://github.com/Drew-tucker33'
                        linkedInLink='https://www.linkedin.com/in/drew-t-4369199b/'
                        headshot={drew} 
                    />
                    <SingleTile 
                        key='Pierce' 
                        name='Pierce Heska' 
                        email='example@gmail.com'
                        githubLink='https://github.com/pheska'
                        linkedInLink='https://www.linkedin.com/in/pheska/'
                        headshot={exPic} 
                    /> 
                    <SingleTile 
                        key='Cyrus' 
                        name='Cyrus Yari' 
                        email='example@gmail.com'
                        githubLink='https://github.com/cyrusyari'
                        linkedInLink='https://www.linkedin.com/in/cyrusyari/'
                        headshot={cyrus} 
                    /> 
                    <SingleTile 
                        key='Rhea' 
                        name='Rhea Wu' 
                        email='example@gmail.com'
                        githubLink='https://github.com/rheawu1212'
                        linkedInLink='https://www.linkedin.com/in/rheawu-tech/'
                        headshot={rhea} 
                    /> 
            </section> 
        </div>
        )
}

export default AboutUs;