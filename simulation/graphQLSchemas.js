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

const FavSong = new GraphQLObjectType({
    name: 'FavoriteSong', 
    description: 'The user\'s favorite song',
    fields: () => ({
        fav_song_id: { type: GraphQLNonNull(GraphQLInt) },
        song_name: { type: GraphQLNonNull(GraphQLString) },
        user_id: { type: GraphQLNonNull(GraphQLInt) }, 
    })
});

const FavMovie = new GraphQLObjectType({
    name: 'FavoriteMovie',
    description: 'The user\'s favorite movie',
    fields: () => ({
        fav_movie_id: { type: GraphQLNonNull(GraphQLInt) },
        movie_name: { type: GraphQLNonNull(GraphQLString) },
        user_id: { type: GraphQLNonNull(GraphQLInt) }
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
        },
        favSong: {
            type: new GraphQLList(FavSong),
            resolve: async (parentValue, args) => {
                const joinSong = 'SELECT user_info.user_id, user_info.user_name, fav_song.user_id, fav_song.song_name FROM user_info INNER JOIN fav_song ON fav_song.user_id = user_info.user_id';
                const query = 'SELECT * FROM fav_song';
                const songs = await db.query(query);
                return songs.rows;
            }
        },
        favMovie: {
            type: new GraphQLList(FavMovie),
            resolve: async (parentValue, args) => {
                // join table here placeholder...yes sir
                const joinMovie = 'SELECT user_info.user_id, user_info.user_name, fav_movie.user_id, fav_movie.movie_name FROM user_info INNER JOIN fav_movie ON fav_movie.user_id = user_info.user_id';
                const query = 'SELECT * FROM fav_movie';
                const movies = await db.query(query);
                return movies.rows;
            }
        }
    })
});

const schema = new GraphQLSchema({
    query: RootQueryType,
    type: User
});

module.exports = schema;