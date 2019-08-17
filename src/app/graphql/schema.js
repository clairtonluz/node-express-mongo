const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type User {
      id: ID!
      name: String!
      email: String!
      createdAt: String!
      updatedAt: String!
  }

  type Query {
      users: [User!]!
      user(id: ID!): User
  }

  type Mutation {
      createUser(name: String!, email: String!, password: String!): User
  }
`);

module.exports = schema;
