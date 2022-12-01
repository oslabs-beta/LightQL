import React, { Component, useEffect, useState, useLayoutEffect, EffectCallback, DependencyList, useRef } from 'react';
import lightql, { LRUCache } from '../../../../../npm-package/lightql';
import 'chart.js/auto';
import { Chart, getDatasetAtEvent } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import '../../styling/demo.scss';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);
//usestate is a hook with class components there with init value being passed in for state 



const Demo = () => {

	const [pulledData, setPulledData] = useState('data is loading...');
	const [user, setUser] = useState('');
	const [chartData, setChartData] = useState({
		datasets: []
	});
	// const [click, setClick] = useState(0);
  	// const initialRender = useRef(true);

	// useLayoutEffect( () => {
	// 	if (initialRender.current) {
	// 		initialRender.current = false;
	// 	} else {
	// 		const cacheGet = cache.get(`
	// 			{
	// 				user {
	// 				user_name,
	// 				song_name,
	// 				movie_name
	// 				}
	// 			}`);
	// 	console.log(cacheGet)
	// 	setPulledData(cacheGet);
	// 	// console.log(pulledData)
	// 	}
	// }, [click]);
	const queryStr = `{
		user {
		user_name,
		song_name,
		movie_name
		}
	}`

	const cache = new LRUCache(3, 'http://localhost:3000/graphql');

	const callLightQL = async () => {
		let start, end;
		if (pulledData === 'data is loading...') {
			start = performance.now();

			const cacheGet = await cache.get(queryStr);
			console.log('cacheGet:', cacheGet.user);
			end = performance.now();
			setPulledData(JSON.stringify(cacheGet.user, null, 2));
			
			
			console.log(`Execution time before: ${end - start} ms`);
		} else {
			start = performance.now();
			cache.get(queryStr);
			end = performance.now();
			console.log(`Execution time after: ${end - start} ms`);
		}
		return;
	}
	
	//include press and setpressed 

	// let cacheGet = '';

	// const setPull = () => {
	// 	setPulledData(JSON.stringify(cacheGet, null, 2));
	// }

	const incrementCounter = () => setClick(click + 1);

	return (
		<div id='demo-body'> 
			<h1 id='page-title'>Watch it work!</h1>
			<button 
				id='demo-btn' 
				className='button-text'
				onClick={callLightQL}
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

export default Demo;