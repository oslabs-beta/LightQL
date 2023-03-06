import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styling/sitewide.scss';
import Homepage from './Homepage';
import Docs from './Docs';
import AboutUs from './AboutUs';
import Demo from './homepageComponents/Demo';

const logo = require('../../../assets/nobg-LightQL.png')
const blackLogo = require('../../../assets/black-logo.png')
const npmLogo = require('../../../assets/npm-vector.png')

const App: React.FC = () => {
	return (
		<>
			<section id='navbar'>
				<section id='left-nav'>
					<Link to='/'>
						<motion.img
							whileHover={{
								rotate: -20
							}}
							id='navbar-logo'
							src={logo.default}
							alt='LightQL Homepage'
						/>
					</Link>

					<Link
						to='/'
					>
						<motion.button
							whileHover={{
								scale: 1.1
							}}
							id='home-btn'
							className='nav-btns'
						>
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
						aria-label='Click to access our Github repository'
						whileHover={{
							type: "bounce",
							scale: 1.2
						}}
						href="https://github.com/oslabs-beta/LightQL"
						target="_blank"
						
						>
						<i className="bi bi-github" style={{fontSize: '1.45rem', color: '#323949'}}></i>
					</motion.a>
					<motion.a
						aria-label='Click to view our NPM package on npmjs.com'
						whileHover={{
							type: "bounce",
							scale: 1.2
						}}
						href="https://www.npmjs.com/package/lightql-cache"
						target="_blank"
					>
						<motion.img alt='NPM Link' id='npm-logo' className='top-right-icons' src={npmLogo.default}></motion.img>
					</motion.a>
				</section>
			</section>
			<Routes>
				<Route
					path='/'
					element={
						<Homepage />
					}
				/>
				<Route
					path='/docs'
					element={
						<Docs />
					}
				/>
				<Route
					path='/aboutus'
					element={
						<AboutUs />
					}
				/>
				<Route
					path='/demo'
					element={
						<Demo />
					}
				/>
			</Routes>
			<section id='footer'>
				<img alt='LightQL Logo' id='black-logo' src={blackLogo.default}></img>
				<p id='footer-text'>Made with love by LightQL.</p>
			</section>
		</>
	)
};

export default App;

// changes made during ts transition
    // added React.FC type