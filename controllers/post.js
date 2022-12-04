const postService = require("../service/postService.js");
const PostService = new postService();
const Post = require("../models").Post;
const serializer = require("express-serializer");
const serializePost = require("../serializers/posts.js");

module.exports = {
  create(req, res) {
    const { title, description, body } = req.body;
    const token = req.get("Authorization");
    PostService.create(title, description, body, token).then((result) => {
      res.status(result.code).send({ message: req.t(`${result.message}`) });
    });
  },
  get(req, res) {
    Post.findAll()
      .then((posts) => {
        serializer(req, posts, serializePost).then((json) => {
          res.status(200).send(json);
        });
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  index(req, res) {
    Post.findByPk(req.params.postId)
      .then((post) => {
        serializer(req, post, serializePost).then((json) => {
          res.status(200).send(json);
        });
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
