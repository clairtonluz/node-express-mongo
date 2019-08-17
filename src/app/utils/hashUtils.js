const bcrypt = require('bcrypt');

const bcript = (value) => bcrypt.hash(value, 12);

const hashUtils = { bcript };

module.exports = hashUtils;
