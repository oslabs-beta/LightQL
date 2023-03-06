import React from 'react';
import '../../styling/aboutUs.scss';
import { motion } from 'framer-motion';

interface Props {
    emailIdName: string;
    name: string;
    email: string;
    emailAria: string;
    GHAria: string;
    LIAria: string;
    headshot: {default: string};
    githubLink: string;
    linkedInLink: string;
}

const SingleTile: React.FC<Props> = ({emailIdName, name, email, emailAria, GHAria, LIAria, headshot, githubLink, linkedInLink}) => {

    let emailTo = `mailto: ${email}`;

    return (
        <motion.div 
            whileHover={{
                scale: 1.03
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
                
                <section id='contact-icons'>
                    <motion.a 
                        id={emailIdName}
                        aria-label={emailAria}
                        className='email-button'
                        whileTap={{ scale: 0.9 }}
                        transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 17 
                        }}
                        href={emailTo}
                    >Email me!</motion.a>
                    <motion.a 
                        aria-label={GHAria}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                            type: "spring",
                            stiffness: 400, 
                            damping: 14
                        }}
                        href={githubLink}
                        target="_blank">
                        <i className="bi bi-github" style={{fontSize: '30px', color: '#323949'}}></i>
                    </motion.a>
                    <motion.a 
                        aria-label={LIAria}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                            type: "spring",
                            stiffness: 400, 
                            damping: 14
                        }}
                        href={linkedInLink}
                        target="_blank">
                        <i className="bi bi-linkedin" style={{fontSize: '30px', color: '#323949'}}></i>
                    </motion.a>
                </section>
                </section>

        </motion.div>
    )

}

export default SingleTile;

// changes made during ts transition
    // added props interface and React.FC type