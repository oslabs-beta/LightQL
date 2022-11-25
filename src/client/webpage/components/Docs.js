import React from 'react';

const Docs = () => {
  
    return (
      <>
      <div id='docsbody'>

        <main className=''>

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
                  <ul>
                    <li>GraphQL schemas setup with your database.</li>
                    <li>Fullstack Application where frontend makes query request to backend.</li>
                  </ul>
              </p>
            </div>

            <div id='gettingstarted' className='gettingstarted'>
              {/* <div id="breakline2" style="border-top: 3px solid lightgrey; margin-left: 0px; margin-right: 0px;"></div>  */}
              <h1>Getting Started</h1>
              <p>If this is your first time using LightQL, run the following command in your terminal:</p>
                <div className='code-box'>
                  <p className='code-text'>
                    <pre>npm install lightql</pre>
                    <button id='button1' className='copy-button'>
                      Copy    
                    </button>
                  </p>
            </div>

            <p id='below'>
            In your server file, you want to require our middleware to handle GraphQL requests using the CommonJS format.
            </p>
        
          </div>
          </div>

        </main>


      </div>
      </>
    )


}

export default Docs;