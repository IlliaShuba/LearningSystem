const commentService = require("../service/commentService.js");
const CommentService = new commentService();
const Comment = require("../models").Comment;
const serializer = require("express-serializer");
const serializeComment = require("../serializers/comments.js");

module.exports = {
  create(req, res) {
    const { body, PostId } = req.body;
    const token = req.get("Authorization");
    CommentService.create(body, PostId, token)
      .then((result) => {
        res.status(result.code).send({ message: req.t(`${result.message}`) });
      })
      .catch((error) => {
        res.status(400).send({ message: req.t("error") });
      });
  },
  index(req, res) {
    Comment.findAll({ where: { PostId: req.params.postId } })
      .then((comments) => {
        serializer(req, comments, serializeComment).then((json) => {
          res.status(200).send(json);
        });
      })
      .catch((error) => {
        res.status(400).send({ message: req.t("error") });
      });
  },
};
