import dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';

import { User } from './models';

dotenv.config();

const typeOrmConfig: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    synchronize: true,
    logging: false,
    entities: [User]
};

export { typeOrmConfig };
