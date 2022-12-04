const userService = require("../service/userService.js");
const UserService = new userService();

module.exports = {
  sign_up(req, res) {
    const { email, password, firstname, lastname, birthdate } = req.body;
    UserService.registration(
      email,
      password,
      firstname,
      lastname,
      birthdate
    ).then((message) => {
      res.status(200).send({ message: req.t(`${message}`) });//fix
    });
  },
};
