const token = require("../app/token.js");
const Token = new token();
const User = require("../models").User;
const password = require("../app/password.js");
const Password = new password();

module.exports = {
  sign_in(req, res) {
    User.findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (Password.compare(req.body.password, user.password)) {
          res.status(201).send({ token: Token.create(user.id) });
        } else {
          res.status(400).send({ message: req.t("wrong_password") });
        }
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
