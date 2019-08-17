const userService = require('../../services/userService');

module.exports = {
  users: () => userService.findAll(),
  user: ({ id }) => userService.findById(id),
  createUser: ({ name, email, passwordHash }) => userService.store({ name, email, passwordHash }),
}
