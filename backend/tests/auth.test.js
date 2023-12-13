import request from 'supertest';
import { app, close } from '../src/app';

//Login Function
describe('Login Tests', () => {
  it('performs successful login and expects 200', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        name: 'Laxmi Sreenivas',
        password: '123456'
      });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('cookie');
  });

  it('handles invalid password and expects 401', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        name: 'Laxmi Sreenivas',
        password: 'wrongpassword'
      });

    expect(res.status).toBe(401);
    expect(res.body.message).toBe('Invalid credentials');
  });

  it('handles invalid username and expects 404', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        name: 'NonExistentUser',
        password: 'somepassword'
      });

    expect(res.status).toBe(401);
  });
});


//Sign Up Function
describe('Sign Up Tests', () => {
  it('handles existing user and expects 400', async () => {
    const res = await request(app)
      .post('/auth/signup')
      .send({
        name: 'Laxmi Sreenivas',
        password: '123456',
        email: 'laxmi.sreenivas@iiitb.ac.in'
      });

    expect(res.status).toBe(400);
    expect(res.body.message).toBe('User already exists');
  });
});


// Closing database connection after all Tests 
afterAll(async () => {
  await close();
});
