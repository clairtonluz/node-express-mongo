const { User } = require('../models');
const hashUtils = require('../utils/hashUtils');

const findAll = () => {
  return User.findAll();
}

const findById = (id) => {
  return User.findByPk(id);
}

const store = async ({ name, email, password }) => {
  let passwordHash = await hashUtils.bcript(password);
  console.log('pass', passwordHash);
  return User.create({ name, email, password: passwordHash });
}

module.exports = {
  findAll,
  findById,
  store,
}
