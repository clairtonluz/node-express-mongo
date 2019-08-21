const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const passport = require('passport');


require('./auth');

module.exports = app => {
  app.use(logger('combined'));
  app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/api', passport.authenticate('jwt', { session: false }));
  app.use('/graphql', passport.authenticate('jwt', { session: false }));
  app.use('/auth/refresh', passport.authenticate('jwt', { session: false }));
}
