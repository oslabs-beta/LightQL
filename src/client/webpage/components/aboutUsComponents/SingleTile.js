import React from 'react';
import '../../styling/aboutUs.scss';
import { motion } from 'framer-motion';


const SingleTile = ({emailIdName, name, email, emailAria, GHAria, LIAria, headshot, githubLink, linkedInLink}) => {

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
            <img id='headshots' alt='' src={headshot.default} />
            <section id='bottom-of-tile'>
                <h2 id='name'>{name}</h2>
                <motion.a 
                    id={emailIdName}
                    aria-label={emailAria}
                    className='email-button'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17 
                    }}
                    href={emailTo}
                >Email me!</motion.a>
                <section id='contact-icons'>
                    <motion.a 
                        aria-label={GHAria}
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
                        <i class="bi bi-github" style={{fontSize: '2rem', color: '#323949'}}></i>
                    </motion.a>
                    <motion.a 
                        aria-label={LIAria}
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
                        <i class="bi bi-linkedin" style={{fontSize: '2rem', color: '#323949'}}></i>
                    </motion.a>
                </section>
                </section>

        </motion.div>
    )

}

export default SingleTile;