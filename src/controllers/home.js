exports.get = (req, res) => {
  const name = "User" || req.params.name || req.query.name || req.body.name;
  res.status(200).json({
    message: "Hello, " + name + "!",
    routes: [
      {
        url: { route: "/users", method: "GET" },
        paramsOnBody: ["username", "name", "email"],
        ultility:
          "This function returns all registered users, if nothing is sent all users will be returned, or with filters it will return users that meet the criteria. PASSWORDS ARE NOT VALID INPUTS.",
      },
      {
        url: { route: "/users", method: "POST" },
        paramsOnBody: ["username", "name", "email", "password"],
        ultility:
          "This route will register a new user, all fields are mandatory.",
      },
      {
        url: { route: "/user/:username", method: "GET" },
        paramsOnBody: [],
        ultility:
          "This route returns only one user, the search is based on the 'username' parameter.",
      },
      {
        url: { route: "/user/:username", method: "DELETE" },
        paramsOnBody: [],
        ultility:
          "This route will delete the user indicated by the 'username' parameter.",
      },
      {
        url: { route: "/user/:username", method: "PATCH" },
        paramsOnBody: ["name", "email", "password", "newPassword"],
        ultility:
          "This route will edit the data of a desired user indicated by the 'username' parameter. To edit, it is necessary to send the password, the 'username' is not replaceable.",
      },
    ],
    notes: ["All passwords are automatically encrypted."],
  });
};
