import 'reflect-metadata';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';

import { app } from './app';
import { typeOrmConfig } from './typeormconfig';

(async () => {
    dotenv.config();

    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined');
    }

    try {
        await createConnection(typeOrmConfig);

        console.log('Connected to Postgres DB');

        app.listen(process.env.EXPRESS_APP_PORT, () => {
            console.log(
                `Server listening on port ${process.env.EXPRESS_APP_PORT}`
            );
        });
    } catch (err) {
        console.error(err);
    }
})();
