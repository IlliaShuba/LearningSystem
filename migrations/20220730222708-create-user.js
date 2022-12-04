'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        min: 5,
        max: 20,
      },
      email: {
        type: Sequelize.STRING,
        isEmail: true,
        allowNull: false,
        unique: true,
        min: 5,
        max: 20,
      },
      password: {
        type: Sequelize.STRING,
        min: 5,
        max: 20,
        allowNull: false,
      },
      dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      firstName: {
        type: Sequelize.STRING,
        min: 5,
        max: 20,
        allowNull: true,
      },
      lastName: {
        type: Sequelize.STRING,
        min: 5,
        max: 20,
        allowNull: true,
      },
      bio: {
        type: Sequelize.STRING,
        allowNull: true,
        min: 20,
        max: 200
      },
      avatar:{
        type: Sequelize.STRING,
        allowNull: true,
        isUrl: true,
      },
      RoleId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
            schema: 'public'
          },
          key: 'id'
        },
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};

