const bcrypt = require("bcrypt");

module.exports = class {
  static async genHash(plainText) {
    const salt = bcrypt.genSaltSync(Number(process.env.BCRYPT_SALT))
    return Promise.resolve(bcrypt.hashSync(plainText, salt));
  }

  static compareHash(plainText, hashedPassword) {
    return Promise.resolve(bcrypt.compareSync(plainText, hashedPassword));
  }

  static genSalt() {
    return Promise.resolve(bcrypt.genSaltSync(Number(process.env.BCRYPT_SALT)));
  }
};
