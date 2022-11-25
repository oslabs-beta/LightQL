import React, { Component, useEffect, useState } from 'react';
import lightql, { LRUCache } from '../../../../npm-package/lightql';
import '../styles.scss';
import { motion } from 'framer-motion';
import Demo from './Demo.js';

const App = () => {

   
	return (
		<div>
			<Demo />
		</div>
	)

}

//buildquery function (Compiles a GraphQL query string tailored to the engine it's intended for)
			//input are the cache and any extrafields 




export default App;