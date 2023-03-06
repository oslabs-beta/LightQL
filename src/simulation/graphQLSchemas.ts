import db from './models';

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');

interface User {
    song_name: string;
    movie_name: string;
    user_id: number;
    user_name: string;
}

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
            resolve: async (parentValue: string, args: object): Promise<User[]> => {
                const query = `SELECT * FROM user_info1`;
                const data = await db.query(query);
                return data.rows;
            },
        },    
    }),
});

const schema = new GraphQLSchema({
    query: RootQueryType,
    type: User1
});

export default schema;

// changes made in ts transition:
    // added User interface to describe the data returned by the resolve function on line 37
    // added type notations to func params and return type of resolve function
    // changed module.exports to export statement on line 52