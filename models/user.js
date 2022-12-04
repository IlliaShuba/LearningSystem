'use strict';
const password = require('../app/password.js')
const Password = new password()

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post);
      User.hasMany(models.Comment);
      User.hasMany(models.Reaction);
      User.belongsTo(models.Role);
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      min: 5,
      max: 20,
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      allowNull: false,
      unique: true,
      min: 5,
      max: 20,
    },
    password: {
      type: DataTypes.STRING,
      min: 5,
      max: 20,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    firstName: {
      type: DataTypes.STRING,
      min: 5,
      max: 20,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      min: 5,
      max: 20,
      allowNull: true,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true,
      min: 20,
      max: 200
    },
    avatar:{
      type: DataTypes.STRING,
      allowNull: true,
      isUrl: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    hooks: {
      beforeSave: (user, options) => {
        user.password = Password.encrypte(user.password);
      },
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};
