const likeService = require("../service/likeService.js");
const LikeService = new likeService();

module.exports = {
  create(req, res) {
    const { PostId } = req.body;
    const token = req.get("Authorization");
    LikeService.create(PostId, token).then((result) => {
      res.status(result.code).send({ message: req.t(`${result.message}`) });
    });
  },
};
