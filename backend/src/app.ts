import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { RouteNotFoundError } from './lib/errors';
import { errorHandler } from './lib/middlewares';
import {
    registrationRouter,
    loginRouter,
    logoutRouter,
    currentUserRouter
} from './routes';

const app = express();
app.set('trust proxy', true);

app.use(cors());
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: false
    })
);

app.use(registrationRouter);
app.use(loginRouter);
app.use(logoutRouter);
app.use(currentUserRouter);

app.all('*', async () => {
    throw new RouteNotFoundError();
});

app.use(errorHandler);

export { app };
