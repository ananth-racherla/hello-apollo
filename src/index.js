require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schemas/hello');

const resolvers = {
  Query: {
    hello: () => 'Namaste Duniya!!!',
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine:{
    apiKey: process.env.APOLLO_KEY,
    graphVariant: process.env.NODE_ENV
  },
  cors: true,
});

const app = express();
server.applyMiddleware({ app });

const port = process.env.PORT || 3000;

app.listen({ port: port }, () =>
  console.log(`GraphQL up @ http://localhost:${port}${server.graphqlPath}`)
);
