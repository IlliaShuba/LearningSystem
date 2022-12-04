const token = require("../app/token.js");
const Token = new token();
const { Role } = require("../models");
const Post = require("../models").Post;

class PostService {
  async create(title, description, body, token) {
    if (Token.validate(token)) {
      try {
        const decoded = Token.decode(token);
        await Post.create({
          title: title,
          status: "created",
          description: description,
          body: body,
          UserId: decoded.user_id,
        });
        return { code: 200, message: "post_created" };
      } catch (err) {
        return { code: 400, message: "error" };
      }
    } else {
      return { code: 400, message: "ivalid_token" };
    }
  }
}

module.exports = PostService;
