'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const user = await queryInterface.sequelize.query(
      `SELECT id FROM Public."Users" WHERE username='admin';`
    );

    let user_id = user[0][0].id

    await queryInterface.bulkInsert('Posts', [{
      status: "active",
      title: "Post",
      description: "some description",
      body: "lorem ipsum",
      UserId: user_id,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
