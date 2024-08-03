// connect postgrsql with nodejs 
const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'demo',
    password: '9163',
    port: 5432,
});

module.exports = pool;
