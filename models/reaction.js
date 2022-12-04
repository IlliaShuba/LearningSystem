'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reaction extends Model {
    static associate(models) {
      Reaction.belongsTo(models.User);
    }
  }
  Reaction.init({
    reaction: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Reaction',
  });
  return Reaction;
};
