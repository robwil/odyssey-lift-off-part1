const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        "Query to get tracks for the homepage grid"
        tracksForHome: [Track!]!
    }

    "A track is a group of modules that teach a given topic"
    type Track {
        id: ID!
        "title of the track"
        title: String!
        "The track's main Author"
        author: Author!
        "URL to an image that illustrates what the track is about"
        thumbnail: String
        "the approximate length of completing this track, in minutes"
        length: Int
        "how many modules are contained in this track"
        modulesCount: Int
    }

    "Author of a complete Track"
    type Author {
        id: ID!
        "Author's first and last name"
        name: String!
        "URL to a photo of the author"
        photo: String
    }
`;

module.exports = typeDefs;