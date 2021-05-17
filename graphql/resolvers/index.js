/* Resolver is a collection of functions that generate response for a GraphQL query. 
In simple terms, a resolver acts as a GraphQL query handler. 
Every resolver function in a GraphQL schema accepts four positional arguments 
as given below − fieldName:(root, args, context, info) => { result } */

const postsResolvers = require("./posts");
const usersResolvers = require("./users");
const commentsResolvers = require("./comments");

module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
  },
  Subscription: {
    ...postsResolvers.Subscription,
  },
};
