import React, { Component, useEffect, useState } from 'react';
import lightql from '../../../npm-package/lightql';
const db = require('./models.js.js');

const App = () => {

    // if error, check this line
    const [pulledData, setPulledData] = useState({});
    
    
    // need to do classic JS fetch request 
	useEffect(() => { //same as component did mount and component did update aggregated
		const fetchData = async () => {
			const response = await fetch(db);
			const gqlData = await response.json();
			setPulledData(gqlData.data);
			console.log(gqlData.data);
		};   
		fetchData();
	}, pulledData)
    

    // need invoke our cache passing in the query we are after


// also we display our retrieved data (object) in the return statement below
// just an idea: we could have two boxes here: one showing data in cache, and one showing data in database for demo purpose (one will be slower without eviction policy and larger)
	return (
		<div> 
			<h1>Hello world!</h1>
		</div>
	)

}

//buildquery function (Compiles a GraphQL query string tailored to the engine it's intended for)
			//input are the cache and any extrafields 




export default App;