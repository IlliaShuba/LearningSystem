const token = require("../app/token.js");
const Token = new token();
const User = require("../models").User;
var moment = require("moment");

module.exports = {
  index(req, res) {
    const decoded = Token.decode(req.get("Authorization"));
    User.findOne({ where: { id: req.params.userId || decoded.user_id } })
      .then((user) => {
        res.status(200).send({
          bio: user.bio,
          nick: user.nick,
          dateOfBirth: moment(user.dateOfBirth).format("DD-MM-YYYY"),
          name: `${user.firstName} ${user.lastName}`,
          avatar: user.avatar,
          username: user.username,
        });
      })
      .catch((error) => {
        res.status(400).send({ message: req.t("error") });
      });
  },
  update(req, res) {
    const decoded = Token.decode(req.get("Authorization"));
    User.update(
      {
        bio: req.body.bio,
        username: req.body.username,
      },
      { where: { id: decoded.user_id } }
    )
      .then(() => {
        res.status(200).send({ message: req.t("user_updated") });
      })
      .catch((error) => {
        res.status(400).send({ message: req.t("error") });
      });
  },
};
