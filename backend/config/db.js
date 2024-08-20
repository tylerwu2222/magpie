// handle database connection
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'magpie',
    password: '24Magpie24!',
    port: 5432,  // Default port for PostgreSQL
    charset: 'UTF8' // need to set this so global chars allowed
  });
  
  pool.on('connect', () => {
    console.log('Connected to the PostgreSQL database, magpie');
  });
  
  module.exports = {
    query: (text, params) => pool.query(text, params),
  };