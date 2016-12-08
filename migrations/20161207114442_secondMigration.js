exports.up = function(knex, Promise) {

  return Promise.all([
    knex.schema.table('users', function(table) {
      table.string('twitter');
    }).then(function() {
      return knex('users').insert([
        { twitter: "a" },
        { twitter: "test" },
        { twitter: "asdf" }
      ]);
    })
  ])

  // to insert JSON, stringify first
  // var query = knex('messages').insert({key: 12345, references: JSON.stringify(["abc","def","ghi"]),data: {a:1,b:2}}).toString();
  // console.log(query);
  //insert into "messages" ("data", "key", "references") values ('{"a":1,"b":2}', '12345', '["abc","def","ghi"]')

};

exports.down = function(knex, Promise) {

  return Promise.all([
    knex.schema.table('users', function(table) {
      table.dropColumn('twitter');
    })
  ])

};