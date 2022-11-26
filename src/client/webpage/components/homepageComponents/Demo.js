import React, { Component, useEffect, useState } from 'react';
import lightql, { LRUCache } from '../../../../../npm-package/lightql';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import '../../styling/demo.scss';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

const Demo = () => {

	const MONTHS = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	  ];

	  function months(config) {
		var cfg = config || {};
		var count = cfg.count || 12;
		var section = cfg.section;
		var values = [];
		var i, value;
	  
		for (i = 0; i < count; ++i) {
		  value = MONTHS[Math.ceil(i) % 12];
		  values.push(value.substring(0, section));
		}
		return values;
	  };

	const labels = months({count: 7})
	console.log(labels)
		const chartData = {
		labels: labels,
		datasets: [{
			label: 'My First Dataset',
			data: [65, 59, 80, 81, 56, 55, 40],
			fill: false,
			borderColor: 'rgb(75, 192, 192)',
			tension: 0.1
		}]
	};

    const [pulledData, setPulledData] = useState([]);
	const [user, setUser] = useState('');

	let arr = JSON.stringify(pulledData).split(',')
	let queryArr = JSON.stringify(pulledData).split('}');
    
	const queryStr = `{
		user (user_name : "Drew"){
		  user_name,
		  song_name,
		  movie_name
		}
	  }`;
	  const fakeQueryData = ` {
        "user_name": "Cassidy",
        "song_name": "Vigilante Shit",
        "movie_name": "Heathers"
      },
      {
        "user_name": "Rhea",
        "song_name": "Iris",
        "movie_name": "The Legend of 1900"
      } `
	
	const cache = new LRUCache(3);
	console.log("cache:" + JSON.stringify(cache));
	const checkKey = (keyName) => {
		if (cache.get(keyName)) return;	
	}

	const setFavData = () => {
		console.log('favData:' + JSON.stringify(favData));
	}

    // need to do classic JS fetch request 
	useEffect(() => { //same as component did mount and component did update aggregated
		const fetchData = () => {
		//helper function to format the query which will be the key in the hashmap
		//perform the get method with formatted query 
		//Lighql.get(query)
		
		
			// 	console.log('user: ' + user);
		// 	fetch('http://localhost:3000/graphql', {
		// 		method: 'POST',
		// 		headers: {'Content-type' : 'application/json',
		// 			'Accept' : 'application/json',
		// 	},
		// 		body: JSON.stringify({query: `{
		// 			user{
		// 				user_name
		// 				song_name
		// 				movie_name
		// 			}
		// 		}`})
		// 	})
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		const favData = data.data.user;
		// 		console.log(favData)
		// 		setPulledData(favData);
		// 	})
		// 	.catch((err) => console.log(`Error in useEffect fetch: ` + err))
		// };
		fetchData();
	}})
    	console.log(pulledData);

// also we display our retrieved data (object) in the return statement below
// just an idea: we could have two boxes here: one showing data in cache, and one showing data in database for demo purpose (one will be slower without eviction policy and larger)
	return (
		<div id='demo-body'> 
			<h1 id='page-title'>Watch it work!</h1>
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
				<section id='cache' className='data-box'>
					<h2>Query Input</h2>
					{queryStr}
					<br />
					<br />
					<h2>Query Result</h2> 
					{queryArr[0]}
				</section>
				<section id='database' className='data-box'>
					<h2>Database</h2>
					{arr.map((data, i = -1) => {
						i += 1;
						if (data[0] === '{' || data[0] === "[") {
							return <li className='names' key={i}>{data}<br /></li>
						}
						return <li className='data' key={i}>{data}<br /></li>
					})}
				</section>
				<Chart id='line-chart' type='line' data={chartData}/>
			</section>
		</div>
	)

}

export default Demo;