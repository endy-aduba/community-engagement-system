const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Post {
    id: ID!
    author: ID!
    title: String!
    content: String!
    category: String!
    aiSummary: String
    createdAt: String
    updatedAt: String
  }

  type HelpRequest {
    id: ID!
    author: ID!
    description: String!
    location: String
    isResolved: Boolean
    volunteers: [ID]
    createdAt: String
    updatedAt: String
  }

  type Query {
    getPosts: [Post]
    getHelpRequests: [HelpRequest]
  }

  type Mutation {
    createPost(author: ID!, title: String!, content: String!, category: String!): Post
    createHelpRequest(author: ID!, description: String!, location: String): HelpRequest
    markHelpResolved(id: ID!): HelpRequest
    addVolunteer(helpRequestId: ID!, userId: ID!): HelpRequest
  }
`;

module.exports = typeDefs;
