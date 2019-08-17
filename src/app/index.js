const express = require('express');
const expressGraphql = require("express-graphql");
const bodyParser = require('body-parser')
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();

const middlewares = () => {
  app.use(bodyParser.json());
}

const routers = () => {
  app.use(
    "/graphql",
    expressGraphql({
      schema,
      rootValue: resolvers,
      graphiql: true
    })
  );
}

middlewares();
routers();
// require('./controllers/authController')(app);

// User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });

module.exports = app;
