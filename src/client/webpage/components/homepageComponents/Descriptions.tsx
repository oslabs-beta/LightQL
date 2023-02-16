import React from 'react';
import '../../styling/descriptions.scss';

const jestLogo = require('../../../../assets/jest-js-icon.png');
const typescriptLogo = require('../../../../assets/typescript-logo.png');
const graphqlLogo = require('../../../../assets/graphql-logo.png');
const localForageLogo = require('../../../../assets/local-forage.png');

const Descriptions = () => {
  return (
    <div id="descriptions">
      <section id="info">
        <section id="gql-info">
          <h1 id="gql-title" className="desc-titles">
            Problem With Existing Solutions
          </h1>
          <p className="paragraph-text">
            Bloated NPM installs with 100+ dependencies and packages, pulling in
            35MB+ of JS generates a bundle size that could lead to poor app
            performance in bandwith constrained apps. There is also a lack of
            support for other frameworks outside of React.
          </p>
        </section>
        <section id="gql-info">
          <h1 id="caching-title" className="desc-titles">
            Who Is This For?
          </h1>
          <p className="paragraph-text">
            You want extremely low latency, client-side caching with persistent
            data storage. You want a high cache hit-rate from a lazy loading
            implementation to improve performance and save system resources. You
            want to set up ALL OF THIS in seconds.
          </p>
        </section>
      </section>
      <div id="separating-line"></div>
      <section id="tech-stack">
        <h1 id="tech-stack-title" className="desc-titles">
          Tech Stack
        </h1>
        <p id="tech-stack-desc" className="paragraph-text">
          In order to provide the developer with very efficient caching for
          their GraphQL queries, LightQL implements a modern tech stack. Cache
          your queries with us to leverage these technologies and improve your
          application performance!
        </p>
        <section id="icon-section">
          <section id="typescript" className="logo-section">
            <img
              alt=""
              className="tech-stack-logos"
              src={typescriptLogo.default}
            />
            <p id="ts-text" className="icon-text">
              Typescript
            </p>
          </section>
          <section id="graphql" className="logo-section">
            <img
              alt=""
              className="tech-stack-logos"
              src={graphqlLogo.default}
            />
            <p id="graphql-text" className="icon-text">
              GraphQL
            </p>
          </section>
          <section id="jest" className="logo-section">
            <img alt="" className="tech-stack-logos" src={jestLogo.default} />
            <p id="jest-text" className="icon-text">
              Jest
            </p>
          </section>
          <section id="local-forage" className="logo-section">
            <img
              alt=""
              className="tech-stack-logos"
              src={localForageLogo.default}
            />
            <p id="localforage-text" className="icon-text">
              Local Forage
            </p>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Descriptions;
