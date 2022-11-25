import React from 'react';
import Hero from './homepageComponents/Hero.js';
import Demo from './homepageComponents/Demo';
import ThreeBox from './homepageComponents/ThreeBox'
import '../styling/sitewide.scss'

const Homepage = () => {
    return (
    <div id='site-flex'>
      <Hero />
      <ThreeBox />
      <Demo />  
    </div>
    )
}

export default Homepage;