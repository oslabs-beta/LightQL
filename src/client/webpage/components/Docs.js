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
    \napp.use('/graphql',
    \n\tlightql({}, capacity, endpoint),
    \n\texpressGraphQL({
    \n\t\tschema: schema,    
    \n\t\tgraphiql: true,
    \n\t}) 
  \n);`;

  const objy = `{}`;

  return (
    <>
      <div id="docsbody">
        <main id="main">
          <div className="text-box">
            <div className="lightql-docs">
              <h1 className='section-titles'>LightQL</h1>
              <p className='section-paragraphs'>
                LightQL is an open-source developer tool that leverages the
                pinpoint accuracy of GraphQL's queries and implements caching to
                improve your website's query efficiency.
              </p>
            </div>

            <div id="using-lightql">
              <p className='section-paragraphs'>Prerequisites:</p>
              <ul className='section-paragraphs'>
                <li>GraphQL schemas setup with your database.</li>
                <li>
                  Fullstack Application where frontend makes query request to
                  backend.
                </li>
              </ul>
              <div id="breakline" className="divider"></div>
            </div>

            <div id="gettingstarted" >
              <h1 className='section-titles'>Getting Started</h1>
              <p className='section-paragraphs'>
                If this is your first time using LightQL, run the following
                command in your terminal:
              </p>
              <div className="code-box">
                  <pre className='blue-code-text'>npm install lightql-cache</pre>
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
              </div>

              <p id="below" className='section-paragraphs'>
                In your server file, you want to require our middleware to
                handle GraphQL requests using the CommonJS format.
              </p>

              <div className="code-box">
                  <pre className="blue-code-text">const lightql = require('lightql-cache');</pre>
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
              </div>

              <p id="below" className='section-paragraphs'>
                LightQL functionality depends on Express' built-in method
                express.json() middleware function in order to parse incoming
                JSON payloads.
              </p>

              <p id="below" className='section-paragraphs'>
                If you haven't already set up your server file with Express, add
                the following code to require Express:
              </p>

              <div className="code-box">
                  <pre className="blue-code-text">
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
              </div>

              <p id="below" className='section-paragraphs'>
                Add the following code to use the express.json() middleware
                function:
              </p>

              <div className="code-box">
                  <pre className="blue-code-text">app.use(express.json());</pre>
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
              </div>

              <div id="breakline" className="divider"></div>

              <div id="usinglightql" className="clientsidecache">
                <h1 className='section-titles'>Using LightQL</h1>
                <p className='section-paragraphs'>
                  LightQL provides a middleware for caching using memory on the
                  client-side with our custom cache that leverages an LRU
                  eviction policy. The arguments you should input for this
                  middleware are as follows:
                </p>
                <p className='section-paragraphs'>
                  For the first parameter, simply pass in an empty object like
                  so:
                </p>
                <h4 className="blue-code-text">{objy}</h4>

                <p className='section-paragraphs'>
                  Next, is the capacity you would like your cache to hold. This
                  capacity refers to when our cache will begin evicting items.
                  For example, if you set the capacity to 50, it will evict an
                  item upon the 51st unique query. It should be noted that if
                  you pass in a non-whole number, it will be rounded down for
                  you. Non integers, negative numbers, and capacities below two
                  will default to simply creating a GraphQL fetch without
                  storing values in the cache.
                </p>
                <p className='section-paragraphs'>
                  The third parameter is the endpoint at which you are actually
                  using GraphQL. For example, this endpoint may be
                </p>
                <p className="blue-code-text">http://localhost:3000/graphql</p>

                <p className='section-paragraphs'>Now you are good to cache your GraphQL responses!</p>
                <div id='big-code-box' className="code-box">
                  <pre id='big-codestring' className="blue-code-text">{codestring}</pre>
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
                </div>
                 

                <p id="below" className='section-paragraphs'>
                  Now, you have properly set up the middleware functions in
                  order to use LightQL's caching tools!
                </p>

                <div id="builtwith">
                  <div id="breakline" className="divider"></div>
                  <h1 className='section-titles'>Technology Stack</h1>
                  <ul className='section-paragraphs'>
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
