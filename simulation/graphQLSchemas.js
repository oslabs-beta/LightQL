const db = require('./models.js');

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');

// const { QueryDocumentKeys } = require('graphql/language/visitor.js');

const User = new GraphQLObjectType({
    name: 'User',
    description: 'Users in our database',
    fields: () => ({
        user_id: { type: GraphQLNonNull(GraphQLInt) },
        user_name: { type: GraphQLNonNull(GraphQLString) }
    })
});



const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root query',
    type: 'Query',
    fields: () => ({
        user: {
            type: new GraphQLList(User),
            resolve: async (parentValue, args) => {
                const query = 'SELECT * FROM user_info';
                const allUsers = await db.query(query);
                return allUsers.rows;
            }
        }
    })
});

const schema = new GraphQLSchema({
    query: RootQueryType,
    type: User
});

module.exports = schema;