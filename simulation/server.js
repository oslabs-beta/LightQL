const express = requrie('express');
const expressGraphQL = require('express_graphql');
const { buildSchema } = require('graphql;')


// construct a schema, using GraphQL schema language
let schema = buildSchema(`
  type Query {
        user_name: String!,
        fav_song: String,
        fav_movie: String
    }
`);


// Root resolver
let root = {
    message: () => 'Hello World!'
};

const app = express();
app.use('/graphql', expressGraphQL({
  schema: schema,
  rootValue: root,
  graphiql : true
}));

//have the server running up on the 3000
app.listen(3000, () => console.log('Express GraphQL server Now running on Localhost: 3000/graphql'));