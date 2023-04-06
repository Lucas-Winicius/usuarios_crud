const Users = require("../models/users");
const bcript = require("../lib/bcript");

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

exports.get = (req, res) => {
  const {password: _, ...body} = req.body;

  Users.find(body ?? {})
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json(err));
};
