const {User} = require('../models');

const findAll = () => {
  return User.findAll();
}

const findById = (id) => {
  return { id };
}

const store = ({ name, email }) => {
  return { name, email };
}

module.exports = {
  findAll,
  findById,
  store,
}
