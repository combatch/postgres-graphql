exports.up = function(knex, Promise) {

  return Promise.all([
    knex.schema.table('users', function(table) {
      table.json('json');
    }).then(function() {
      return knex('users').insert(
        [
          { json: JSON.stringify(["abc", "def", "ghi"]) },
          { json: JSON.stringify(["123", "asdfa", "xx"]) }
        ]
      );
    })
  ])

};

exports.down = function(knex, Promise) {

    return Promise.all([
      knex.schema.table('users', function(table) {
        table.dropColumn('json');
      })
    ])

};