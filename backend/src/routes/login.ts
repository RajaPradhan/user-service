import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { validateRequest } from '../lib/middlewares';
import { BadRequestError } from '../lib/errors';
import { UserManagerService, PasswordManagerService } from '../services';

const router = express.Router();

const validationRules = [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
        .trim()
        .matches(/^(?=\D*\d)\S{8,}$/)
        .withMessage(
            'Password must be atleast 8 characters and must contain atleast a digit and a character'
        )
];

router.post(
    '/api/users/login',
    validationRules,
    validateRequest,
    async (req: Request, res: Response) => {
        const { email, password } = req.body;

        const userManager = new UserManagerService();
        const passwordManager = new PasswordManagerService();

        const existingUser = await userManager.findUserByEmail(email);
        if (!existingUser) {
            throw new BadRequestError('Invalid credentials');
        }

        console.log('existingUser=', existingUser);

        const passwordsMatch = await passwordManager.compare(
            existingUser.password,
            password
        );
        if (!passwordsMatch) {
            throw new BadRequestError('Invalid Credentials');
        }

        // Generate JWT
        const userJwt = jwt.sign(
            {
                id: existingUser.id,
                fullName: existingUser.fullName,
                email: existingUser.email
            },
            process.env.JWT_KEY!
        );

        // Store it on session object
        req.session = {
            jwt: userJwt
        };

        res.status(200).send(userManager.generateUserPayload(existingUser));
    }
);

export { router as loginRouter };
