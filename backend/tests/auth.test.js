import supertest from 'supertest';
import app from '../src/app';

describe('Test wrong login password', () => {
    it('performs wrong pwd login and expects 400', async () => {
      const response = await supertest(app)
        .post('/auth/login')
        .send({
          name: 'Laxmi Sreenivas',
          password: 'wrongpassword'
        });
  
      expect(response.status).toBe(401);
      expect(response.body.message).toBe('Invalid credentials');
    });
  });