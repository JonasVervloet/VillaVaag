import { createConnection } from 'mongoose';

export default createConnection(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => console.log('Connected to DB!') 
);