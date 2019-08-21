const router = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../../config');

const createToken = (id, name, email) => {
  const userData = { name, email };
  const tokenData = {
    subject: `${id}`,
    issuer: config.jwt.issuer,
    expiresIn: `${config.jwt.expiresIn}s`,
  };
  const refreshTokenData = {
    subject: `${id}`,
    issuer: config.jwt.issuer,
    expiresIn: `${config.jwt.refreshExpiresIn}s`,
  };

  const token = jwt.sign(userData, config.jwt.secret, tokenData);
  const refreshToken = jwt.sign(userData, config.jwt.refreshSecret, refreshTokenData);
  return {
    user,
    token: { value: token, expiresIn: config.jwt.expiresIn - 1 },
    refreshToken: { value: refreshToken, expiresIn: config.jwt.refreshExpiresIn - 1 },
  };

}
router.post('/login', function (req, res, next) {
  passport.authenticate('local', { session: false }, (err, user, info) => {

    if (err) {
      return res.status(500).json({
        message: err.message,
        err
      });
    }
    if (!user) {
      return res.status(401).json({ message: 'Usuário não existe' });
    }

    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      const userData = { name: user.name, email: user.email };
      const tokenData = {
        subject: `${user.id}`,
        issuer: config.jwt.issuer,
        expiresIn: `${config.jwt.expiresIn}s`,
      };
      const refreshTokenData = {
        subject: `${user.id}`,
        issuer: config.jwt.issuer,
        expiresIn: `${config.jwt.refreshExpiresIn}s`,
      };

      const token = jwt.sign(userData, config.jwt.secret, tokenData);
      const refreshToken = jwt.sign(userData, config.jwt.refreshSecret, tokenData);
      return res.json({
        user,
        token: { value: token, expiresIn: config.jwt.expiresIn - 1 },
        refreshToken: { value: refreshToken, expiresIn: config.jwt.refreshExpiresIn - 1 },
      });
    });
  })(req, res);
});


router.post('/refresh', function (req, res, next) {
  // console.log('req.user', req);
  res.send({
    user: req.user,
    teste: "testse",
  });
});
module.exports = router;
