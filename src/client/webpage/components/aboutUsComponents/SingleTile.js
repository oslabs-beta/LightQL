import React from 'react';
import '../../styling/aboutUs.scss';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const SingleTile = ({key, name, email, headshot, githubLink, linkedInLink}) => {

    let emailTo = `mailto: ${email}`;

    return (
        <div id='singleTile'>
            <img id='headshots' src={headshot.default} />
            <section id='bottom-of-tile'>
                <h2 id='name'>{name}</h2>
                <section id='contact-links'>
                <a href={emailTo} className='contact-text'>{email}</a>
                <a 
					href={githubLink}
					target="_blank">
					<GitHubIcon className='au-icons' sx={{color: '#323949'}}></GitHubIcon>
				</a>
                <a 
					href={linkedInLink}
					target="_blank">
					<LinkedInIcon className='au-icons' sx={{color: '#323949'}}></LinkedInIcon>
				</a>
                </section>
            </section>

        </div>
    )

}

export default SingleTile;