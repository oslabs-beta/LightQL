import React from 'react';
import '../../styling/aboutUs.scss';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const SingleTile = ({key, name, email, headshot, githubLink, linkedInLink}) => {

    let emailTo = `mailto: ${email}`;

    return (
        <motion.div 
            whileHover={{
                scale: 1.1
            }}
            transition={{
                type: "spring",
                stiffness: 400, 
                damping: 14
            }}
            id='singleTile'
        >
            <img id='headshots' src={headshot.default} />
            <section id='bottom-of-tile'>
                <h2 id='name'>{name}</h2>
                <motion.a 
                    id='email-button'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17 
                    }}
                    href={emailTo}
                    className='contact-text'
                >Email me!</motion.a>
                <section id='contact-icons'>
                    <motion.a 
                        whileHover={{
                            scale: 1.1
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 400, 
                            damping: 14
                        }}
                        href={githubLink}
                        target="_blank">
                        <GitHubIcon className='au-icons' sx={{color: '#323949'}}></GitHubIcon>
                    </motion.a>
                    <motion.a 
                        whileHover={{
                            scale: 1.1
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 400, 
                            damping: 14
                        }}
                        href={linkedInLink}
                        target="_blank">
                        <LinkedInIcon id='linkedin-icon'className='au-icons' sx={{color: '#323949'}}></LinkedInIcon>
                    </motion.a>
                </section>
                </section>

        </motion.div>
    )

}

export default SingleTile;