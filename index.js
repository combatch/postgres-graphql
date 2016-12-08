const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(require('./knexfile')[process.env.NODE_ENV || 'development']);
const winston = require('winston');

winston.configure({
  transports: [
    new(winston.transports.Console)({ level: 'debug', json: true }),
    new(winston.transports.File)({ filename: 'logs/postgresIndexjs.log', level: 'info' })
  ]
  // move this to ./config/config eventually
});

knex.migrate.latest()
  .then(function() {
    // run knex seed files if needed
    //return knex.seed.run();
  })
  .then(function() {
    winston.log('info', 'ran migrations from index.js. DB should be up to date.');
});