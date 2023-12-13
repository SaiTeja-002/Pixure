import request from 'supertest';
import { app, close } from '../src/app';

describe('Login Tests', () => {
  it('performs successful login and expects 200', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        name: 'Laxmi Sreenivas',
        password: '123456'
      });

    expect(response.status).toBe(200);
  });

  it('handles invalid password and expects 401', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        name: 'Laxmi Sreenivas',
        password: 'wrongpassword'
      });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Invalid credentials');
  });

  it('handles invalid username and expects 404', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        name: 'NonExistentUser',
        password: 'somepassword'
      });

    expect(response.status).toBe(401);
  });
});

// Closing database connection after all Tests 
afterAll(async () => {
  await close();
});
