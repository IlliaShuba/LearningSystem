const User = require("../models").User;
const Reaction = require("../models").Reaction;

var serializePost = async function (req, post) {
    const author = await User.findByPk(post.UserId)
    const  reactions  = await Reaction.findAndCountAll({
        where: {
            reaction: 'like',
            PostId: post.id
        }
    });
    const  replies  = await Reaction.findAndCountAll({
        where: {
            reaction: 'reply',
            PostId: post.id
        }
    });
    return {
      id: post.id,
      title: post.title,
      description: post.description,
      body: post.body,
      author_name: author.username,
      author_image: author.avatar,
      likes: reactions.count,
      replies: replies.count,
      UserId: post.UserId
    };
  }

module.exports = serializePost;
