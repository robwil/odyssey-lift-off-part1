const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate homepage grid
        tracksForHome: (_parent, _args, context, _info) => {
            const { dataSources } = context;
            return dataSources.trackAPI.getTracksForHome();
        },
        // get single track by ID
        track: (_parent, args, context, _info) => {
            const { id } = args;
            const { dataSources } = context;
            return dataSources.trackAPI.getTrack(id);
        }
    },
    Track: {
        author: (parent, _args, context, _info) => {
            // here, parent is the REST result for the parent Track
            const { authorId } = parent;
            const { dataSources } = context;
            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: (parent, _args, context, _info) => {
            // here, parent is the REST result for the parent Track
            const { id: trackId } = parent;
            const { dataSources } = context;
            return dataSources.trackAPI.getTrackModules(trackId);
        }
    },
};

module.exports = resolvers;