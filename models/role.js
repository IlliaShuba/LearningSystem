'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.hasMany(models.User);
    }
  }
  Role.init({
    title: {
      type: DataTypes.STRING,
      notEmpty: true,
      allowNull: false,
      unique: true,
    }
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};
