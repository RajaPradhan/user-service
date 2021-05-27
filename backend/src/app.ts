import express, { Request, Response, NextFunction } from 'express';
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

// For local development
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV === 'production'
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
