import React, { Component, useEffect, useState } from 'react';
import lightql, { LRUCache } from '../../../../../npm-package/lightql';
import 'chart.js/auto';
import { Chart, getDatasetAtEvent } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import '../../styling/demo.scss';
import months from '../Utils';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

const Demo = () => {

  const [pulledData, setPulledData] = useState('');
	const [user, setUser] = useState('');

	let arr = JSON.stringify(pulledData).split(',')
	let queryArr = JSON.stringify(pulledData).split('}');

	const cache = new LRUCache(3, 'http://localhost:3000/graphql');

	const queryStr = 
	`	{
		user {
			user_name,
			song_name,
			movie_name
		}
	}`

	const callLightQL = async () => {
		const cacheGet = await cache.get(queryStr)
		// cache.get(queryStr);
		.then(() => {
			const userData = cacheGet.user;
			setPulledData(JSON.stringify(userData, null, 2));
		})

	//const useEffect = async () => {
		//const cacheGet = await cache.get(`{
			//user {
			//user_name,
			//song_name,
			//movie_name
			//}
		//}`);
		//return JSON.stringify(cacheGet)
	//}
	//let cacheGet = '';
	//const setPull = () => {
		//setPulledData(JSON.stringify(cacheGet, null, 2));
	//}

	return (
		<div id='demo-body'> 
			<h1 id='page-title'>Watch it work!</h1>
			<button 
				id='demo-btn' 
				className='button-text'
				onClick={() => {
					setPulledData(JSON.stringify(useEffect()))
				}}
				>Run the demo
			</button>
			{/* <form htmlFor='input-box'>
				<select 
				aria-label='Whose favorites would you like to see?'
				name='User Selector'
				id='input-box'
				type='text'
				value={user}
				onChange={(e) => {
					setUser(e.target.value);
					callQuery();
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
			</form> */}
			<section id='result-boxes'>
				<section id='cache' className='data-box'>
					<h2 className='result-box-titles'>Query:</h2>
					<pre className='query-string'>{queryStr}</pre>
				</section>
				<section id='query-result' className='data-box'>
					<h2 className='result-box-titles'>Query Result:</h2>
					<pre >
						<code className='query-string'>{pulledData}</code>
					</pre>
					{/* <ul>
					{arr.map((data, i = -1) => {
						i += 1;
							if (data[0] === '{' || data[0] === "[") {
								return <li className='names' key={i}>{data}<br /></li>
								} return <li className='data' key={i}>{data}<br /></li>
							})}
					</ul> */}
				</section>
			</section>
			<section id='chart-container'>
				<Chart 
					name='Chart tracking caching speed'
					id='line-chart' 
					options={{
						responsive: true,
						maintainAspectRatio: true
					}}
					type='line' 
					data={chartData}/>
			</section>
		</div>
	)
}
}
export default Demo;