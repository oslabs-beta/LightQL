<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/oslabs-beta/LightQL">
    <img src="./src/assets/LightQL.png" alt="Logo" width="200" height="200">
  </a>

<h3 align="center">LightQL</h3>

  <p align="center">
    Welcome to LightQL. A lightspeed, lightweight client-side cache for GraphQL.
    <br />
    <a href="https://lightql.com/docs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://lightql.com">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

  <summary>Table of Contents</summary>
  <ol>
    <li> <a href="#overview">Overview</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#how-lightql-works">How LightQL works</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#authors">Authors</a></li>
  </ol>

<!-- ABOUT THE PROJECT -->

## Overview

LightQL is an easy-to-use super fast and lightweight Javascript library providing a client-side caching solution for GraphQL. Use LightQL for extremely low latency retrieval of persistent cache data.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

- GraphQL
- Typescript
- Node/Express
- React
- Chart.js
- Jest
- Supertest
- AWS RDS
- Webpack

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Prerequisites

- All developers will have to integrate GraphQL into their functionality. This means setting up your GraphQL schemas and resolvers as well as your database.
- Our package is intended to work in tandem with a full-stack application where the frontend makes query requests to the backend, so please set this up as well before using our package.

## Demo

- Head over to the home page of our website ([lightql.com](https://www.lightql.com/))
- Using our demo is a simple 2-step process.
- First, press the “Run the demo” button to see the resulting GraphQL query
  result. If you divert your attention to the metrics box down below you
  will see an uncached run time populate. This statistic represents the
  time it took to make a GraphQL fetch and receive the response data. You
  can also see the spike in time upwards on the graph provided on the
  right.
- If you press the run query button again you will notice that your
  cached run time metric will now render. The graph on the right will also
  dive down as the response time has significantly decreased. The uncached run time should never change after this, as we are now retrieving your data from the cache every instance forward showing our super lightning speed of retrieval!

  \*A small disclaimer: It should be noted that your first query will have a significantly higher runtime than the other first queries because it is establishing a connection.

## Installation

1. If this is your first time using LightQL, run the following command in your terminal:
2. ```sh
   npm install lightql-cache
   ```
3. In your frontend app’s file (e.g. your filename.js file), you want to import our LightQL module to handle GraphQL requests using the ES6 module format. This can also be done in your React (.jsx), Typescript (.ts and .tsx), and similar file formats.
   ```js
   import { LRUCache, DoublyLinkedList, DLLNode } from ‘lightql-cache’;
   ```
4. Next, create an instance of a cache using the de-structured LRUCache object, passing in a capacity as the first argument. The capacity must be an integer and greater than zero. You must also pass in a valid GraphQL endpoint as a string as the second argument. We have set a capacity of 3 in our example below:
   ```js
   const cache = new LRUCache(3, 'http://localhost:3000/graphql');
   ```
5. Now, to make your first query to the cache, you create a GraphQL formatted query string based on your requirements, for example:
   ```js
   const graphqlQueryStr = `	{
   	user {
   		user_name,
   		song_name,
   		movie_name
   	}
   }`;
   ```
6. Next, we invoke the get function associated with the named variable you have for the LRUCache, and pass in your query string and associate variables if necessary. The get function always returns a promise, therefore it is best to generate an async function that leverages the await syntax to resolve the data returned from the cache.
   ```js
   const callLightQL = async () => {
     const cacheGet = await cache.get(graphqlQueryStr, variables);
   };
   ```
7. Now, you are properly set up and can use the data as you wish!
8. A quick example: imagine you had a React app that included Chart.js functionality that you wanted to display on a specific page. You could import LightQL cache to effectively retrieve your data from your database, and then store it in your client-side LightQL caching solution. Then, every time you wanted to display the correct chart.js data, you could grab the correct information from your LightQL cache with extremely low latency time. Example code below:

<img src="./src/assets/docs-example.png" alt="Logo" width="auto" height="auto">

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## How LightQL works

LightQL caches responses to GraphQL formatted queries as key-value object representations of the graph’s nodes, making it possible to satisfy GraphQL queries from a cached data store.

When your application needs data, it checks the cache first to determine whether the data is available. If the data is available (a cache hit), the cached data is returned, and the response is issued to the user. If the data isn’t available (a cache miss), the database is queried for the data. The cache is then populated with the data that is retrieved from the database, and the data is returned to the user. The benefit of this strategy is that the cache contains only data that the application actually requests, keeping the cache size cost-effective. Further, this increases cache hits, reduces network calls, and significantly reduces the overall runtime and latency.

LightQL’s LRUCache function creates an instance of the LightQL cache. A capacity and GraphQL endpoint are the two necessary arguments to pass in to this function. The LRUCache consists of a HashMap and Doubly-Linked List to store GraphQL query responses. The combination of these two data structures offer best-case scenario time complexity (O(1)) for insertion, deletion, and lookup.

```js
function LRUCache(capacity, graphqlEndpoint) {
  this.capacity = Math.floor(capacity);
  this.map = new Map();
  this.dll = new DoublyLinkedList();
  this.graphqlEndpoint = graphqlEndpoint;
}
```

LightQL leverages localForage and IndexedDB to persist cached data between sessions. localForage is a fast and simple storage library for Javascript. localForage leverages asynchronous storage through IndexedDB, a JS-based object-oriented database that runs in your browser, with a simple, localStorage-like API. Whenever you run a query through LightQL, the capacity, HashMap, Doubly-Linked List, and graphqlEndpoint are loaded into memory if available through the localForage setItem method:

```js
localforage.setItem();
```

Additionally, before returning data to users, LightQL writes our cache data structures and graphqlEndpoint to our persistent memory in IndexedDB through the localForage getItem method:

```js
localforage.getItem();
```

Developers can entrust LightQL to handle their GraphQL caching needs simply and effectively, so they can focus on working what matters most.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

Upcoming planned features:

- Caching of query mutations
- Cache pruning/invalidation strategy
- Partial retrieval

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Here at LightQL we created our open-source project with the intention to further expand upon and improve this tool for years to come.

That's where the community comes in! If you have an idea that might make LightQL better we always encourage contributions. Simply follow the steps below to submit the changes you would make.

- Fork LightQL
- Pull down our dev branch with command (`git pull origin dev`)
- Create your own Feature Branch with the command (`git checkout -b <yourFeatureName>`)
- Add your changes with the command (`git add .`)
- Stage and commit your changes with the command (`git commit -m "<your comment>"`)
- Merge your branch with the dev branch locally with the command (`git merge dev`)
- Resolve any merge conflicts
- Push up your branch with the command (`git push origin <your feature branch name>`)
- Open a pull request
- Don't forget to star this repo! We look forward to your contributions!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Visit https://lightql.com/aboutus to reach out to the team!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Authors

- Cassidy Johnson
- Cyrus Yari
- Drew Tucker
- Pierce Heska
- Rhea Wu

<p align="right">(<a href="#readme-top">back to top</a>)</p>
