const token = require("../app/token.js");
const Token = new token();
const Comment = require("../models").Comment;
const Reaction = require("../models").Reaction;

class CommentService {
  async create(body, PostId, token) {
    let comment = await Comment.create({
      body: body,
      ReplyId: null,
      UserId: Token.decode(token).user_id,
      PostId: PostId,
    });
    let reply = await Reaction.create({
      reaction: "reply",
      UserId: comment.UserId,
      PostId: PostId,
    });
    if (comment && reply){
        return { code: 200, message: "comment_created" };
    } else {
        return { code: 400, message: "error" };
    }
  }
}

module.exports = CommentService;
