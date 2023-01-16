const db = require('./models.ts');

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');

const User1 = new GraphQLObjectType({
    name: 'User1',
    description: "Usertype for front end",
    fields: () => ({
        song_name: { type: GraphQLNonNull(GraphQLString) },
        movie_name: { type: GraphQLNonNull(GraphQLString) },
        user_id: { type: GraphQLNonNull(GraphQLInt) },
        user_name: { type: GraphQLNonNull(GraphQLString) }
    })
});

const RootQueryType = new GraphQLObjectType({
    name : 'Query',
    description: 'Root query',
    type : 'Query',
    fields: () => ({
        user: {
            type: new GraphQLList(User1),
            resolve: async (parentValue: string, args: string) => {
                const query = `SELECT * FROM user_info1 WHERE user_name = '${args}';`;
                console.log(query);
                const data = await db.query(query);
                console.log(data);
                return data.rows;
            },
        },    
    }),
});

const schema = new GraphQLSchema({
    query: RootQueryType,
    type: User1
});

module.exports = schema;