const { Client } = require('pg');

const connection = {
    user: 'postgres',
    host: '',
    database: 'crud',
    password: 'root',
    port: 5432
};

const client = new Client(connection);

client.connect();

module.exports = client;