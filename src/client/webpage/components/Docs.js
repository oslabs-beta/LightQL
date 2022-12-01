import React from 'react';
import { useState } from 'react';
import '../styling/docs.scss';
import docsExample from '../../../assets/docs-example.png';

const Docs = () => {
  // Button Text
  const [buttonTextA, setButtonTextA] = useState('Copy');
  const [buttonTextB, setButtonTextB] = useState('Copy');
  const [buttonTextC, setButtonTextC] = useState('Copy');
  const [buttonTextD, setButtonTextD] = useState('Copy');

  const graphqlQueryStr = `
    \nconst graphqlQueryStr = 
	  \n\t{
    \n\t\tuser {
    \n\t\t\tuser_name,
	  \n\t\t\tsong_name,
	  \n\t\t\tmovie_name
	  \n\t\t}
	\n\t};`;

  const callTheCache = `const callLightQL = async () => {
	  \n\tconst cacheGet = await cache.get(graphqlQueryStr, variables);		
  \n}\n`;

  const importStr = `import { LRUCache, DoublyLinkedList, DLLNode } from 'lightql-cache';`;

  return (
    <>
      <div id="docsbody">
        <main id="main">
          <div className="text-box">
            <div className="lightql-docs">
              <h1 className="section-titles">LightQL</h1>
              <p className="section-paragraphs">
                LightQL is an open-source developer tool that leverages the
                pinpoint accuracy of GraphQL's queries and implements caching to
                improve your website's query efficiency.
              </p>
            </div>

            <div id="using-lightql">
              <h4 className="section-paragraphs">Prerequisites:</h4>
              <ul className="section-paragraphs">
                <li>GraphQL schemas setup with your database.</li>
                <li>
                  Fullstack Application where frontend makes query request to
                  backend.
                </li>
              </ul>
              <div id="breakline" className="divider"></div>
            </div>

            <div id="gettingstarted">
              <h1 className="section-titles">Getting Started</h1>
              <p className="section-paragraphs">
                If this is your first time using LightQL, run the following
                command in your terminal:
              </p>
              <div className="code-box">
                <pre className="blue-code-text">npm install lightql-cache</pre>
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

              <p id="below" className="section-paragraphs">
                In your frontend app’s file (e.g. your ***filename.js*** file),
                you want to import our LightQL module to handle GraphQL requests
                using the ES6 module format. This can also be done in your React
                (.jsx), Typescript (.ts and .tsx), and similar file formats.
              </p>

              <div className="code-box">
                <pre className="blue-code-text">{importStr}</pre>
                <button
                  className="copy-button"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `import { LRUCache, DoublyLinkedList, DLLNode } from 'lightql-cache';`
                    ) && setButtonTextB('Copied!')
                  }
                >
                  {buttonTextB}
                </button>
              </div>

              <p id="below" className="section-paragraphs">
                Next, create an instance of a cache using the de-structured
                LRUCache object, passing in a capacity as the first argument.
                The capacity must be an integer and greater than zero. You must
                also pass in a valid GraphQL endpoint as a string as the second
                argument. We have set a capacity of 3 in our example below:
              </p>

              <div className="code-box">
                <pre className="blue-code-text">
                  const cache = new LRUCache(3,
                  'http://localhost:3000/graphql');
                </pre>
                <button
                  className="copy-button"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `const cache = new LRUCache(3, 'http://localhost:3000/graphql');`
                    ) && setButtonTextC('Copied!')
                  }
                >
                  {buttonTextC}
                </button>
              </div>

              <p className="section-paragraphs">
                Now, to make your first query to the cache, you create a GraphQL
                formatted query string based on your requirements, for example:
              </p>
              <div id="big-code-box" className="code-box">
                <pre id="big-codestring" className="blue-code-text">
                  {graphqlQueryStr}
                </pre>
              </div>

              <p id="below" className="section-paragraphs">
                Next, we invoke the get function associated with the named
                variable you have for the LRUCache, and pass in your query
                string and associate variables if necessary. The get function
                always returns a promise, therefore it is best to generate an
                async function that leverages the await syntax to resolve the
                data returned from the cache.
              </p>

              <div className="code-box">
                <pre className="blue-code-text">{callTheCache}</pre>
                <button
                  className="copy-button"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `const callLightQL = async () => {
                        const cacheGet = await cache.get(graphqlQueryStr, variables);		
                      }`
                    ) && setButtonTextD('Copied!')
                  }
                >
                  {buttonTextD}
                </button>
              </div>

              <p id="below" className="section-paragraphs">
                Now, you are properly set up and can use the data as you wish!
              </p>

              <p id="below" className="section-paragraphs">
                A quick example: imagine you had a React app that included
                Chart.js functionality that you wanted to display on a specific
                page. You could import LightQL cache to effectively retrieve
                your data from your database, and then store it in your
                client-side LightQL caching solution. Then, every time you
                wanted to display the correct chart.js data, you could grab the
                correct information from your LightQL cache with extremely low
                latency time. Example code below:
              </p>

              <img className="image" src={docsExample} />

              <div id="breakline" className="divider"></div>

              <div id="builtwith">
                <h1 className="section-titles">Technology Stack</h1>
                <ul className="section-paragraphs">
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
        </main>
      </div>
    </>
  );
};

export default Docs;
