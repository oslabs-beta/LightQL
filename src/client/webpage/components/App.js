import React from 'react';
import lightql, { LRUCache } from '../../../../npm-package/lightql';
import { Link, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styling/sitewide.scss';
import Homepage from './Homepage.js';
import Docs from './Docs.js';
import AboutUs from './AboutUs.js';
import Demo from './homepageComponents/Demo'
import GitHubIcon from '@mui/icons-material/GitHub';


// import { motion } from 'framer-motion';
const logo = require('../../../assets/LightQL.png')
const blackLogo = require('../../../assets/black-logo.png')

const App = () => {

   
	return (
		<>
			 <section id='navbar'>
				<section id='left-nav'>
				<Link to='/'>
					<motion.img 
						whileHover={{
							rotate: -20,
							bounce: 2
						}}
						id='navbar-logo' 
						src={logo.default} 
						alt='LightQL Logo'
					/>
				</Link>
					<Link to='/'>
						<motion.button 
						whileHover={{
							scale: 1.1
						}}
						id='home-btn' 
						className='nav-btns'>
						Home
						</motion.button>
					</Link>

					<Link to='/docs'>
						<motion.button 
							whileHover={{
								scale: 1.1
							}} 
							id='docs-btn' 
							className='nav-btns'
						>
						Docs
						</motion.button>
					</Link>

					<Link to='/aboutus'>
						<motion.button 
							whileHover={{
								scale: 1.1
							}} 
							id='aboutus-btn' 
							className='nav-btns'
						>
						About Us
						</motion.button>
					</Link>				
				</section>
				<section id='right-nav'>
					<motion.a 
						whileHover={{
							type: "bounce",
							scale: 1.2
						}}
						href="https://github.com/oslabs-beta/LightQL" 
						target="_blank">
						<GitHubIcon sx={{color: '#323949'}}></GitHubIcon>
					</motion.a>
					<motion.a 
						whileHover={{
							type: "bounce",
							scale: 1.2
						}}
						href="https://www.npmjs.com/package/lightql-cache" 
						target="_blank">
						{/* npm icon image */}
						<div id='placeholder'></div>
					</motion.a>
				</section>
			 </section>
			<Routes>
				<Route 
					path='/'
					element={
						<Homepage 
						/* props placeholder */
						/* props placeholder */
						/* props placeholder */
						/>
					}
				/>
				<Route
					path='/docs'
					element={
						<Docs
						/* props placeholder */
						/* props placeholder */
						/* props placeholder */
						/>
					}
				/>
				<Route
					path='/aboutus'
					element={
						<AboutUs
						/* props placeholder */
						/* props placeholder */
						/* props placeholder */
						/>
					}
				/>
				<Route
					path='/demo'
					element={
						<Demo
						/* props placeholder */
						/* props placeholder */
						/* props placeholder */
						/>
					}
				/>
			</Routes>
			<section id='footer'>
				<img id='black-logo' src={blackLogo.default}></img>
				<p id='footer-text'>Made with love by LightQL.</p>
			</section>
		</>
	)

}

export default App;