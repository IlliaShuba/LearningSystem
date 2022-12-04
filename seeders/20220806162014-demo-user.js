'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const admin = await queryInterface.sequelize.query(
      `SELECT id FROM Public."Roles" WHERE title='Admin';`
    );

    const user = await queryInterface.sequelize.query(
      `SELECT id FROM Public."Roles" WHERE title='User';`
    );

    let user_id = user[0][0].id
    let admin_id = admin[0][0].id

    await queryInterface.bulkInsert('Users', [
      {
        username: "Illia",
        email: "shuba.illia.dev@gmail.com",
        password: "12345678",
        dateOfBirth: new Date(),
        firstName: "Illia",
        lastName: "Shuba",
        bio: null,
        avatar: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        RoleId: user_id
      },
      {
        username: "nemuzora_nozomu",
        email: "nemuzora.nozomu@gmail.com",
        password: "12345678",
        dateOfBirth: new Date(),
        firstName: "Ihor",
        lastName: "Pavliuk",
        bio: null,
        avatar: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        RoleId: user_id
      },
      {
        username: "admin",
        email: "admin@gmail.com",
        password: "12345678",
        dateOfBirth: new Date(),
        firstName: "Stiv",
        lastName: "Robert",
        bio: null,
        avatar: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        RoleId: admin_id
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
