const bcrypt = require("bcrypt");

module.exports = class {
  static genHash(plainText) {
    const salt = bcrypt.genSaltSync(process.env.BCRYPT_SALT);
    return bcrypt.hashSync(plainText, salt);
  }

  static compareHash(plainText, hashedPassword) {
    return bcrypt.compareSync(plainText, hashedPassword);
  }
};
