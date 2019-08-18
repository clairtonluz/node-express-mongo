const passport = require('passport');
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;
const config = require('../../config');

const userService = require('../services/userService')

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  async function (email, password, done) {
    try {
      let user = await userService.findByEmail(email);
      if (!user) {
        return done(null, false, { message: 'Email não cadastrado.' });
      }
      if (!userService.validPassword(password, user.password)) {
        return done(null, false, { message: 'Credenciais inválida.' });
      }
      return done(null, { id: user.id, name: user.name, email });
    } catch (err) {
      console.log('error:', err);
      return done(err);
    }
  }
));

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwt.secret,
  // issuer: 'rastreamento.bytecom.psi.br',
},
  function (jwtPayload, done) {
    console.log(jwtPayload);
    return done(null, jwtPayload);
  }
));
