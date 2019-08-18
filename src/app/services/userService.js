const { User } = require('../models');
const hashUtils = require('../utils/hashUtils');

const findAll = () => {
  return User.findAll();
}

const findById = (id) => {
  return User.findByPk(id);
}

const findByEmail = (email) => {
  return User.findOne({ where: { email: email } })
}

const validPassword = (rawPassword, hashPassowrd) => hashUtils.compare(rawPassword, hashPassowrd);

const store = async ({ name, email, password }) => {
  let passwordHash = await hashUtils.encrypt(password);
  console.log('pass', passwordHash);
  return User.create({ name, email, password: passwordHash });
}

module.exports = {
  findAll,
  findById,
  findByEmail,
  store,
  validPassword,
}
