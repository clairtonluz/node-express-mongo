const express = require('express');
const middlewares = require('./middlewares');
const routes = require('./routes');

require('./middlewares/auth');

const app = express();

middlewares(app);
routes(app);

module.exports = app;
