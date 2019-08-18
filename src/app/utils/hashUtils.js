const bcrypt = require('bcrypt');

const encrypt = (value) => bcrypt.hash(value, 12);
const compare = (rawValue, encryptedValue) => bcrypt.compare(rawValue, encryptedValue);

const hashUtils = { encrypt, compare };

module.exports = hashUtils;
