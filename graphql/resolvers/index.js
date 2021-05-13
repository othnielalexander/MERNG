/* Resolver is a collection of functions that generate response for a GraphQL query. 
In simple terms, a resolver acts as a GraphQL query handler. 
Every resolver function in a GraphQL schema accepts four positional arguments 
as given below − fieldName:(root, args, context, info) => { result } */

const postResolvers = require("./posts");
const usersResolvers = require("./users");

module.exports = {
  Query: {
    ...postResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postResolvers.Mutation,
  },
};
