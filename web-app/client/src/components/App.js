import React, { Component, useEffect, useState } from 'react';
import lightql from '../../../../npm-package/lightql';
import '../styles.scss'
// const db = require('../../../simulation/models');

const App = () => {

    // if error, check this line
    const [pulledData, setPulledData] = useState(null);
	const [user, setUser] = useState('');
    
    
    // need to do classic JS fetch request 
	useEffect(() => { //same as component did mount and component did update aggregated
		const fetchData = async () => {
			console.log('user: ' + user);
			const queryMessage = 'SELECT * FROM user_info';
			const response = await fetch('http://localhost:3000/graphql');
			const gqlData = await response.json();
			setPulledData(gqlData.data);
			console.log('response: ' + JSON.stringify(response));
			console.log('pulled data: ' + pulledData);
			console.log("gqldata: " + JSON.stringify(gqlData));
			console.log('gqlData.data: ' + gqlData.data)
		};
		fetchData();
	}, pulledData)
    

    // need invoke our cache passing in the query we are after


// also we display our retrieved data (object) in the return statement below
// just an idea: we could have two boxes here: one showing data in cache, and one showing data in database for demo purpose (one will be slower without eviction policy and larger)
	return (
		<div id='demo-body'> 
			<h1 id='page-title'>Welcome to LightQL</h1>
			<form>
				<select 
				name='user'
				id='input-box'
				type='text'
				value={user}
				onChange={(e) => {
					setUser(e.target.value);
					// console.log('e.target.value: ' + e.target.value)
				}}
				>
					<option value='' hidden default disabled>
						Whose favorites would you like to see?
					</option>
					<option value='Drew'>Drew</option>
					<option value='Cyrus'>Cyrus</option>
					<option value='Rhea'>Rhea</option>
					<option value='Pierce'>Pierce</option>
					<option value='Cassidy'>Cassidy</option>
				</select>
			</form>
			<section id='result-boxes'>
				<p id='cache' className='data-box'>
					Cache
				</p>
				<p id='database' className='data-box'>
					Database
				</p>
			</section>
		</div>
	)

}

//buildquery function (Compiles a GraphQL query string tailored to the engine it's intended for)
			//input are the cache and any extrafields 




export default App;