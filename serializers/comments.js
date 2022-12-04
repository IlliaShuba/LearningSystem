const { comment } = require("../controllers");

const User = require("../models").User;

var serializeComment = async function (req, comment) {
  const author = await User.findByPk(comment.UserId);
  return {
    id: comment.id,
    body: comment.body,
    PostId: comment.PostId,
    UserId: comment.UserId,
    author: author.username,
    avatar: author.avatar
  };
};

module.exports = serializeComment;
