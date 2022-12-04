'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.hasMany(models.Comment);
      Post.hasMany(models.Reaction);
      Post.belongsTo(models.User);
    }
  }
  Post.init({
    status: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      min: 5,
      max: 15,
      unique: true,
    },
    description: {
      type:DataTypes.STRING,
      allowNull: true,
      min: 20,
      max: 50,
    },
    body: {
      type:DataTypes.STRING,
      allowNull: false,
      min: 50,
      max: 150,
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
