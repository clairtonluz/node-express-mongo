const graphql = require('./graphql.route');
const auth = require('./auth.route');
const user = require('./user.route');
const passport = require('passport');

module.exports = app => {
  app.use(graphql);
  app.use('/user', passport.authenticate('jwt', { session: false }), user);
  app.use('/auth', auth);

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
}
