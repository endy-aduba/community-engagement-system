const Post = require('../models/Post');
const HelpRequest = require('../models/HelpRequest');

const resolvers = {
  Query: {
    getPosts: async () => await Post.find(),
    getHelpRequests: async () => await HelpRequest.find(),
  },
  Mutation: {
    createPost: async (_, { author, title, content, category }) => {
      return await Post.create({ author, title, content, category });
    },
    createHelpRequest: async (_, { author, description, location }) => {
      return await HelpRequest.create({ author, description, location });
    },
    markHelpResolved: async (_, { id }) => {
      return await HelpRequest.findByIdAndUpdate(id, { isResolved: true, updatedAt: new Date() }, { new: true });
    },
    addVolunteer: async (_, { helpRequestId, userId }) => {
      return await HelpRequest.findByIdAndUpdate(
        helpRequestId,
        { $addToSet: { volunteers: userId }, updatedAt: new Date() },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
