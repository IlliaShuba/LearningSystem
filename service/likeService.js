const token = require("../app/token.js");
const Token = new token();
const Reaction = require("../models").Reaction;

class LikeService {
  async create(PostId, token) {
    try {
      let liked = await Reaction.findOne({
        where: {
          reaction: "like",
          UserId: Token.decode(token).user_id,
          PostId: PostId,
        },
      });
      if (!liked) {
        await Reaction.create({
          reaction: "like",
          UserId: Token.decode(token).user_id,
          PostId: PostId,
        });
      }
      return { code: 200, message: "liked" };
    } catch (e) {
      console.log(e);
      return { code: 400, message: "error" };
    }
  }
}

module.exports = LikeService;
