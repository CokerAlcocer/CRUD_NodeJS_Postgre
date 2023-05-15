import pg from 'pg';

export const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'root',
    database: 'crud',
    port: 5432
})