import React from 'react';
import Hero from './homepageComponents/Hero';
import ThreeBox from './homepageComponents/ThreeBox';
import Descriptions from './homepageComponents/Descriptions';
import Demo from './homepageComponents/Demo';
import '../styling/sitewide.scss';

const Homepage: React.FC = () => {
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

// changes made during ts transition
    // added React.FC type