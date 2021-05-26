import request from 'supertest';

import { app } from '../../app';

describe('Tests for user login', () => {
    it('should return 400 on invalid email', async () => {
        return request(app)
            .post('/api/users/login')
            .set('Content-Type', 'application/json')
            .send({
                email: 'idontexist@db.com',
                password: 'passw0rd'
            })
            .expect(400);
    });

    it('should return 400 on invalid password', async () => {
        return request(app)
            .post('/api/users/login')
            .set('Content-Type', 'application/json')
            .send({
                email: 'test@test.com',
                password: ''
            })
            .expect(400);
    });

    it('should return a 200 and a cookie header on successful login', async () => {
        await request(app)
            .post('/api/users/register')
            .set('Content-Type', 'application/json')
            .send({
                fullName: 'John Doe',
                email: 'test@test.com',
                password: 'passw0rd'
            })
            .expect(201)
            .expect(res => {
                const { fullName, email } = res.body;
                expect(fullName).toBe('John Doe');
                expect(email).toBe('test@test.com');
            });

        const response = await request(app)
            .post('/api/users/login')
            .set('Content-Type', 'application/json')
            .send({
                email: 'test@test.com',
                password: 'passw0rd'
            })
            .expect(200);

        expect(response.get('Set-Cookie')).toBeDefined();
    });
});
