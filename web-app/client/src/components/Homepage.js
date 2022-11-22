import React from 'react';
import Hero from './homepageComponents/Hero.js';
import Demo from './homepageComponents/Demo';
import '../styling/sitewide.scss'

const Homepage = () => {
    return (
    <div id='site-flex'>
      <Hero />
      <Demo />  
    </div>
    )
}

export default Homepage;