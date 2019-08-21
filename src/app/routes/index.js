const graphql = require('./graphql.route');
const auth = require('./auth.route');
const user = require('./user.route');
const notFound = require('./notFound.route');
const errorHandler = require('./error.route');

module.exports = app => {
  app.use(graphql);
  app.use('/api/user', user);
  app.use('/auth', auth);

  app.use(notFound);
  app.use(errorHandler);
}
