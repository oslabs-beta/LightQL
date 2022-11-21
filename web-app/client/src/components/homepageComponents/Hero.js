import React from 'react';
import '../../styling/hero.scss';
import { motion } from 'framer-motion'

let leftLines = require('../../../../assets/lower-left-lines.png');
let rightLines = require('../../../../assets/upper-right-lines.png');
let logo = require('../../../../assets/LightQL.png');


const Hero = () => {
    return (
        <div id='hero-layout'>
            <div id='hero'>
                <section id='hero-left'>
                    <img id='lower-left' className='hero-imgs' src={leftLines.default}></img> 
                </section>
                <section id='main-info-section'>
                    <img id='logo'src={logo.default}></img>
                    <h1 id='welcome-text' className='text'>This is LightQL.</h1>
                    <p id='description-text' className='text'>An ultra-fast, lightweight client-side cache for GraphQL.</p>
                    <section id='clipboard-docs'>
                        
                    </section>
                </section>
                <section id='hero-right'>
                <img id='upper-right' className='hero-imgs' src={rightLines.default}></img> 
                </section>
            </div>
            
        </div>
    )
}

export default Hero;