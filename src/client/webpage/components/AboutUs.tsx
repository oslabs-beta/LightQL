import React from 'react';
import SingleTile from './aboutUsComponents/SingleTile';
import '../styling/aboutUs.scss';

const cassidy = require('../../../assets/cassidy.png')
const drew = require('../../../assets/drew.png');
const pierce = require('../../../assets/pierce.png');
const cyrus = require('../../../assets/cyrus.png');
const rhea = require('../../../assets/rhea.png');

const AboutUs: React.FC = () => {

    return (
        <div id='about-us-page-layout'>
            <h1 id="about-us-title">Meet the Team</h1>
            <main id='about-us-layout'>
                    <SingleTile 
                        emailIdName='cassEmail'
                        name='Cassidy Johnson' 
                        email='cassidyrose56@gmail.com'
                        emailAria="Click here to email Cassidy Johnson"
                        GHAria="Click here to view Cassidy Johnson\'s Github"
                        LIAria="Click here to view Cassidy Johnson\'s LinkedIn"
                        githubLink='https://github.com/cassidyrose56'
                        linkedInLink='https://www.linkedin.com/in/cassidy-r-johnson/'
                        headshot={cassidy} 
                    />
                    <SingleTile 
                        emailIdName='cyrusEmail'
                        name='Cyrus Yari' 
                        email='cyrus.brk@gmail.com'
                        emailAria="Click here to email Cyrus Yari"
                        GHAria="Click here to view Cyrus Yari\'s Github"
                        LIAria="Click here to view Cyrus Yari\'s LinkedIn"
                        githubLink='https://github.com/cyrusyari'
                        linkedInLink='https://www.linkedin.com/in/cyrusyari/'
                        headshot={cyrus} 
                    /> 
                    <SingleTile 
                        emailIdName='drewEmail'
                        name='Drew Tucker' 
                        email='drewtucker19@gmail.com'
                        emailAria="Click here to email Drew Tucker"
                        GHAria="Click here to view Drew Tucker\'s Github"
                        LIAria="Click here to view Drew Tucker\'s LinkedIn"
                        githubLink='https://github.com/Drew-tucker33'
                        linkedInLink='https://www.linkedin.com/in/drew-t-4369199b/'
                        headshot={drew} 
                    />
                    <SingleTile  
                        emailIdName='pierceEmail'
                        name='Pierce Heska' 
                        email='pierceheska@gmail.com'
                        emailAria="Click here to email Pierce Heska"
                        GHAria="Click here to view Pierce Heska\'s Github"
                        LIAria="Click here to view Pierce Heska\'s LinkedIn"
                        githubLink='https://github.com/pheska'
                        linkedInLink='https://www.linkedin.com/in/pheska/'
                        headshot={pierce} 
                    /> 
                    <SingleTile 
                        emailIdName='rheaEmail'
                        name='Rhea Wu' 
                        email='rheawu1212@gmail.com'
                        emailAria="Click here to email Rhea Wu"
                        GHAria="Click here to view Rhea Wu\'s Github"
                        LIAria="Click here to view Rhea Wu\'s LinkedIn"
                        githubLink='https://github.com/rheawu1212'
                        linkedInLink='https://www.linkedin.com/in/rheawu-tech/'
                        headshot={rhea} 
                    /> 
            </main> 
        </div>
        )
}

export default AboutUs;