import React, { Component, useEffect, useState, useLayoutEffect, EffectCallback, DependencyList, useRef } from 'react';
import lightql, { LRUCache } from '../../../../../npm-package/lightql';
import 'chart.js/auto';
import { Chart, getDatasetAtEvent } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import '../../styling/demo.scss';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);
//usestate is a hook with class components there with init value being passed in for state 



const Demo = () => {

	const [pulledData, setPulledData] = useState('Waiting for user to submit GraphQL query');
	const [user, setUser] = useState('');
	const [timeArr, setTimeArr] = useState([]);
	const [chartData, setChartData] = useState({
		datasets: []
	});
	const [uncachedTime, setUncachedTime] = useState('')
	const [currentTime, setCurrentTime] = useState('');

	const queryStr = `{
		user {
		user_name,
		song_name,
		movie_name
		}
	}`

	
	useLayoutEffect(() => {
		const labels = [];
		for (let i = 0; i < timeArr.length; i++) {
			if (i === 0) {
				labels.push('uncached data')
			} else {
				labels.push('cached data')
			}
		}

		setChartData({
			labels: labels,
			datasets: [{
				label: 'Query Run Time',
				data: timeArr,
				fill: false,
				borderColor: '#11b5e4',
				tension: 0.1
			}]
		});
		}, [timeArr]	
	)


	const cache = new LRUCache(3, 'http://lightql.onrender.com/graphql');

	const callLightQL = async () => {
		let start, end;
		if (pulledData === 'Waiting for user to submit GraphQL query') {
			start = performance.now();
			const cacheGet = await cache.get(queryStr);
			console.log('cacheGet:', cacheGet.user);
			end = performance.now();
			setPulledData(JSON.stringify(cacheGet.user, null, 2));
			console.log(`Execution time before: ${(end - start).toFixed(2)} ms`);
			setTimeArr((timeArr) => [...timeArr, (end - start).toFixed(2)]);
			setUncachedTime(`${(end - start).toFixed(2)}` + ' ms')
		} else {
			start = performance.now();
			cache.get(queryStr);
			end = performance.now();
			console.log(`Execution time after: ${(end - start)} ms`);
			setTimeArr((timeArr) => [...timeArr, (end - start).toFixed(2)]);
			setCurrentTime(`${(end - start).toFixed(2)}` + ' ms');
		}
		return;
	}

	return (
		<div id='demo-body'> 
			<h1 id='page-title' className='title-font'>Watch it work!</h1>
			<motion.button 
				id='demo-btn' 
				className='button-text'
				onClick={() => {
					callLightQL();
				}}
				whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17 
                }}
				>Run the demo
			</motion.button>
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
				</section>
			</section>
			<section id='metrics-container'>
				<section id='chart-container' className='metrics'>
					<Chart 
						style={{height: '90%'}}
						name='Chart tracking caching speed'
						id='line-chart' 
						options={{
							responsive: true,
							maintainAspectRatio: true
						}}
						type='line' 
						data={chartData}/>
				</section>
				<section id='time-box' className='metrics'>
					<h1 className='title-font'>Run Time Statistics</h1>
					<h6 className='body-metric-font'>Uncached Run Time: <p className='time-stamp'>{uncachedTime}</p></h6>
					<h6 className='body-metric-font'>Cached Run Time: <p className='time-stamp'>{currentTime}</p></h6>
				</section>
			</section>
			
		</div>
	)
}

export default Demo;