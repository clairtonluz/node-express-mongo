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
    user: { id, name, email },
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
      console.log('teste');
      if (err) {
        res.send(err);
      }
      const tokens = createToken(user.id, user.name, user.email);

      return res.json(tokens);
    });
  })(req, res);
});


router.post('/refresh', function (req, res, next) {
  const user = req.user;
  if (!user) throw new Error('Usuário não encontrado');
  const tokens = createToken(user.sub, user.name, user.email);
  res.send(tokens);
});
module.exports = router;
