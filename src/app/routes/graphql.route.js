const express = require('express');
const router = express.Router();
const expressGraphql = require("express-graphql");
const schema = require('../graphql/schema');
const resolvers = require('../graphql/resolvers');

router.use("/graphql",
  expressGraphql({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
)

module.exports = router;
