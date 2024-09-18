import {Client } from 'pg';

const client = new Client({
    connectionString:process.env.DATABASE_URl ,
})

client.connect();

export default client;