
exports.up = function(knex, Promise) {

  return Promise.all([
    knex.schema.createTable('users', function(table){
      table.increments();
      table.string('username');
      table.string('password');
      table.string('extra');
      table.timestamps();
    })
  ])

};

exports.down = function(knex, Promise) {

  return Promise.all([
    knex.schema.dropTable('users')
  ])

};
