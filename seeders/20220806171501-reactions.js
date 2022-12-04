'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const user = await queryInterface.sequelize.query(
      `SELECT id FROM Public."Users" WHERE username='admin';`
    );

    const post = await queryInterface.sequelize.query(
      `SELECT id FROM Public."Posts" WHERE title='Post';`
    );

    let user_id = user[0][0].id
    let post_id = post[0][0].id

    return queryInterface.bulkInsert('Reactions', [{
      reaction: "bruh",
      UserId: user_id,
      PostId: post_id,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Reaction', null, {});
  }
};
