'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User);
    }
  }
  Comment.init({
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      min: 20,
      max: 100,
    },
    ReplyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
