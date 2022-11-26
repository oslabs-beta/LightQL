import React from 'react';
import '../styling/docs.scss';

const Docs = () => {
  
    return (
      <>
      <div id='docsbody'>

        <main id='main'>

          <div className='text-box'>

            <div className='lightql-docs'>
              <h1>LightQL</h1>
                <p>
                LightQL is an open-source developer tool that leverages the pinpoint accuracy of GraphQL's queries and implements caching to improve your website's query efficiency.
                </p>              
            </div>

            <div id='using-lightql'>
              <p>
                Prerequisites:
              </p>  
                  <ul>
                    <li>GraphQL schemas setup with your database.</li>
                    <li>Fullstack Application where frontend makes query request to backend.</li>
                  </ul>
            </div>

            <div id='gettingstarted' className='gettingstarted'>
              {/* <div id="breakline2" style="border-top: 3px solid lightgrey; margin-left: 0px; margin-right: 0px;"></div>  */}
              <h1>Getting Started</h1>
              <p>If this is your first time using LightQL, run the following command in your terminal:</p>
                <div className='code-box'>
                  <section className='code-text'>
                    <pre>npm install lightql</pre>
                    <button id='button1' className='copy-button'>
                      Copy    
                    </button>
                  </section>  
            </div>

            <p id='below'>
            In your server file, you want to require our middleware to handle GraphQL requests using the CommonJS format.
            </p>

            <div className='code-box'>
                  <section className='code-text'>
                    <pre>const lightql = require('lightql')</pre>
                    <button id='button2' className='copy-button'>
                      Copy    
                    </button>
                  </section>
            </div>

            <p id='below'>
            LightQL functionality depends on Express' built-in method express.json() middleware function in order to parse incoming JSON payloads.
            </p>

            <p id='below'>
            If you haven't already set up your server file with Express, add the following code to require Express:
            </p>

            <div className='code-box'>
                  <section className='code-text'>
                    <pre>const expressGraphQL = require('express-graphql').graphqlHTTP;</pre>
                    <button id='button3' className='copy-button'>
                      Copy    
                    </button>
                  </section>
            </div>

            <p id='below'>
            Add the following code to use the express.json() middleware function:
            </p>

            <div className='code-box'>
                  <section className='code-text'>
                    <pre>app.use(express.json());</pre>
                    <button id='button3' className='copy-button'>
                      Copy    
                    </button>
                  </section>
            </div>

            <div id="breakline" className='divider'>

            <div id='usinglightql' className='clientsidecache'>
              <h1>Using LightQL</h1>
                <p>LightQL provides a middleware for caching using memory on the client-side with our custom cache that leverages an LRU eviction policy.
                   The arguments you should input for this middleware are as follows:
                     <br> 
                     </br>
                    For the first parameter, simply pass in an empty object 
                    <code id="bluecodestyle">
                    {}
                    </code>
                    like so. 
                    <br> 
                    </br>
                    Next, is the capacity you would like your cache to hold. 
                    This capacity refers to when our cache will begin evicting items. 
                    For example, if you set the capacity to 50, it will evict an item upon the 51st unique query. 
                    It should be noted that if you pass in a non-whole number, it will be rounded down for you. 
                    Non integers, negative numbers, and capacities below two will default to simply creating a GraphQL fetch without storing values in the cache.
                  <br> 
                  </br>
                  The third parameter is the endpoint at which you are actually using GraphQL. For example, this endpoint may be
                  <code>http://localhost:3000/graphql</code>
                  <br> 
                  </br>
                  Now you are good to cache your GraphQL responses!
                </p>
                <div className='code-box'>
                  <p className='code-text'>
                    {/* <pre>"app.use(\n    '/graphql', \n    lightQL({}, capacity, endpoint),\n    expressGraphQL({\n      schema: schema,\n      graphiql: true,\n    })\n  );"</pre> */}
                    <button id='button4' className='copy-button'>
                      Copy    
                    </button>
                  </p>
            </div>
            </div>
          </div>
          </div>
          </div>
        </main>
      </div>
      </>
    )


}

export default Docs;