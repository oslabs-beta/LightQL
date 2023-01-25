import React from 'react';
import Hero from './homepageComponents/Hero.js';
import ThreeBox from './homepageComponents/ThreeBox.js';
import Descriptions from './homepageComponents/Descriptions.js';
import Demo from './homepageComponents/Demo.js';
import '../styling/sitewide.scss';

const Homepage = () => {
    return (
    <div id='site-flex'>
      <Hero />
      <ThreeBox />
      <Descriptions />
      <Demo />  
    </div>
    )
}

export default Homepage;