import React from 'react';
import '../../styling/descriptions.scss'

const jestLogo = require('../../../../assets/jest-js-icon.png');
const typescriptLogo = require('../../../../assets/typescript-logo.png');
const graphqlLogo = require('../../../../assets/graphql-logo.png');
const localForageLogo = require('../../../../assets/local-forage.png');

const Descriptions = () => {

    return (
        <div id='descriptions'>
            <section id='info'>
                <section id='gql-info'>
                    <h1 id='gql-title' className='desc-titles'>GraphQL</h1>
                    <p className='paragraph-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper ut ligula ut ornare. Suspendisse. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper ut ligula ut ornare. Suspendisse.</p>
                </section>
                <section id='gql-info'>
                    <h1 id='caching-title' className='desc-titles'>Caching</h1>
                    <p className='paragraph-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper ut ligula ut ornare. Suspendisse. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper ut ligula ut ornare. Suspendisse.</p>
                </section>
            </section>
            <div id='separating-line'></div>
            <section id='tech-stack'>
                <h1 id='tech-stack-title' className='desc-titles'>Tech Stack</h1>
                <p id='tech-stack-desc' className='paragraph-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper ut ligula ut ornare. Suspendisse. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper ut ligula ut ornare. Suspendisse.</p>
                <section id='icon-section'>
                    <section id='typescript' className='logo-section'>
                        <img alt='' className='tech-stack-logos' src={typescriptLogo.default} />
                        <p id='ts-text' className='icon-text'>Typescript</p>
                    </section>
                    <section id='graphql' className='logo-section'>
                        <img alt='' className='tech-stack-logos' src={graphqlLogo.default} />
                        <p id='graphql-text' className='icon-text'>GraphQL</p>
                    </section>
                    <section id='jest' className='logo-section'>
                        <img alt='' className='tech-stack-logos' src={jestLogo.default} />
                        <p id='jest-text' className='icon-text'>Jest</p>
                    </section>
                    <section id='local-forage' className='logo-section'>
                        <img alt='' className='tech-stack-logos' src={localForageLogo.default} />
                        <p id='localforage-text' className='icon-text'>Local Forage</p>
                    </section>
                </section>
            </section>
        </div>
    )

}

export default Descriptions;