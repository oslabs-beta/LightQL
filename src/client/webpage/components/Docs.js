import React from 'react';
import { useState } from 'react';
import '../styling/docs.scss';

const Docs = () => {
  // Button Text
  const [buttonTextA, setButtonTextA] = useState('Copy');
  const [buttonTextB, setButtonTextB] = useState('Copy');
  const [buttonTextC, setButtonTextC] = useState('Copy');
  const [buttonTextD, setButtonTextD] = useState('Copy');
  const [buttonTextE, setButtonTextE] = useState('Copy');

  const codestring = `
    \napp.use(              
    \n'/graphql',
    \nlightql({}, capacity, endpoint),
    \nexpressGraphQL({
    \n schema: schema,    
    \n  graphiql: true,
    \n}) 
  \n);`;

  const objy = `{}`;

  return (
    <>
      <div id="docsbody">
        <main id="main">
          <div className="text-box">
            <div className="lightql-docs">
              <h1>LightQL</h1>
              <p>
                LightQL is an open-source developer tool that leverages the
                pinpoint accuracy of GraphQL's queries and implements caching to
                improve your website's query efficiency.
              </p>
            </div>

            <div id="using-lightql">
              <p>Prerequisites:</p>
              <ul>
                <li>GraphQL schemas setup with your database.</li>
                <li>
                  Fullstack Application where frontend makes query request to
                  backend.
                </li>
              </ul>
              <div id="breakline" className="divider"></div>
            </div>

            <div id="gettingstarted" className="gettingstarted">
              <h1>Getting Started</h1>
              <p>
                If this is your first time using LightQL, run the following
                command in your terminal:
              </p>
              <div className="code-box">
                <section className="code-text">
                  <pre>npm install lightql-cache</pre>
                  <button
                    className="copy-button"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        'npm install lightql-cache'
                      ) && setButtonTextA('Copied!')
                    }
                  >
                    {buttonTextA}
                  </button>
                </section>
              </div>

              <p id="below">
                In your server file, you want to require our middleware to
                handle GraphQL requests using the CommonJS format.
              </p>

              <div className="code-box">
                <section className="code-text">
                  <pre>const lightql = require('lightql-cache');</pre>
                  <button
                    className="copy-button"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        `const lightql = require('lightql-cache')`
                      ) && setButtonTextB('Copied!')
                    }
                  >
                    {buttonTextB}
                  </button>
                </section>
              </div>

              <p id="below">
                LightQL functionality depends on Express' built-in method
                express.json() middleware function in order to parse incoming
                JSON payloads.
              </p>

              <p id="below">
                If you haven't already set up your server file with Express, add
                the following code to require Express:
              </p>

              <div className="code-box">
                <section className="code-text">
                  <pre>
                    const expressGraphQL =
                    require('express-graphql').graphqlHTTP;
                  </pre>
                  <button
                    className="copy-button"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        `const expressGraphQL = require('express-graphql').graphqlHTTP;`
                      ) && setButtonTextC('Copied!')
                    }
                  >
                    {buttonTextC}
                  </button>
                </section>
              </div>

              <p id="below">
                Add the following code to use the express.json() middleware
                function:
              </p>

              <div className="code-box">
                <section className="code-text">
                  <pre>app.use(express.json());</pre>
                  <button
                    className="copy-button"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        `app.use(express.json());`
                      ) && setButtonTextD('Copied!')
                    }
                  >
                    {buttonTextD}
                  </button>
                </section>
              </div>

              <div id="breakline" className="divider"></div>

              <div id="usinglightql" className="clientsidecache">
                <h1>Using LightQL</h1>
                <p>
                  LightQL provides a middleware for caching using memory on the
                  client-side with our custom cache that leverages an LRU
                  eviction policy. The arguments you should input for this
                  middleware are as follows:
                </p>
                <p>
                  For the first parameter, simply pass in an empty object like
                  so:
                </p>
                <h4 className="bluecodestyle">{objy}</h4>

                <p>
                  Next, is the capacity you would like your cache to hold. This
                  capacity refers to when our cache will begin evicting items.
                  For example, if you set the capacity to 50, it will evict an
                  item upon the 51st unique query. It should be noted that if
                  you pass in a non-whole number, it will be rounded down for
                  you. Non integers, negative numbers, and capacities below two
                  will default to simply creating a GraphQL fetch without
                  storing values in the cache.
                </p>
                <p>
                  The third parameter is the endpoint at which you are actually
                  using GraphQL. For example, this endpoint may be
                </p>
                <p className="bluecodestyle">http://localhost:3000/graphql</p>

                <p>Now you are good to cache your GraphQL responses!</p>
                <div className="code-box">
                  <p className="code-text">
                    {codestring}

                    <button
                      className="copy-button"
                      onClick={() =>
                        navigator.clipboard.writeText(
                          `app.use( '/graphql', lightQL({}, capacity, endpoint), expressGraphQL({ schema: schema, graphiql: true, }) );`
                        ) && setButtonTextE('Copied!')
                      }
                    >
                      {buttonTextE}
                    </button>
                  </p>
                </div>

                <p id="below">
                  Now, you have properly set up the middleware functions in
                  order to use LightQL's caching tools!
                </p>

                <div id="builtwith">
                  <div id="breakline" className="divider"></div>
                  <h1>Technology Stack</h1>
                  <ul>
                    <li>GraphQL</li>
                    <li>Typescript</li>
                    <li>Node/Express</li>
                    <li>AWS RDS</li>
                    <li>React</li>
                    <li>Chart.js</li>
                    <li>Jest/Supertest</li>
                    <li>Webpack</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Docs;
