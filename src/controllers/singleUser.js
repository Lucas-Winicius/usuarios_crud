const Bcript = require("../lib/bcript");
const User = require("../models/users");

exports.get = (req, res) => {
  const { username } = req.params;
  User.find({ username })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
};

exports.delete = (req, res) => {
  const { username } = req.params;
  User.findOneAndDelete({ username })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
};

exports.patch = async (req, res) => {
  const { username } = req.params;
  const { username: _, ...body } = req.body;
  const hash = await User.find({ username }).then((user) => user[0].password);
  const newPassword = await Bcript.genHash(body.newPassword ?? "random String");

  console.log(await Bcript.compareHash(body.password, hash));

  if ((await Bcript.compareHash(body.password, hash)) === false)
    return res.status(400).json({ message: "Password does not match" });
  else {
    body.newPassword ? (body.password = newPassword) : (body.password = hash);

    User.findOneAndUpdate({ username }, body, {
      new: true,
      runValidators: true,
    })
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(500).json(err));
  }
};
