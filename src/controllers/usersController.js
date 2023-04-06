const Users = require("../models/users");
const bcript = require("../lib/bcript");

exports.get = (req, res) => res.send("Users");

exports.post = async (req, res) => {
  const { password, ...body } = req.body;
  const newPassword = await bcript.genHash(password);

  body.password = newPassword;

  const newUser = new Users(body);

  newUser
    .save()
    .then((user) => res.status(201).json(user))
    .catch((err) => res.status(500).json(err));
};
