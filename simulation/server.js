const path = require('path');
const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./graphQLSchemas');
const app = express();
const cors = require('cors');
const PORT = 3000;

//const { buildSchema } = require('graphql');


 // user_name: String!,
// fav_song: String,
// fav_movie: String

// construct a schema, using GraphQL schema language
// 
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/graphql', expressGraphQL({
  schema: schema,
//   rootValue: root,
  graphiql: true
}));

//have the server running up on the 3000
app.listen(PORT, () => console.log(`Express GraphQL server now running on localhost:${PORT}/graphql`));



// let schema = buildSchema(`
// //   type Query {
// //     hello: String
// //     }
// // `);


// // Root resolver
// let root = {
//     hello: () => {
//       return 'Hello World!'
//     }
    
// };