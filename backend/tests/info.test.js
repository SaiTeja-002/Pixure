import request from 'supertest';
import { app, close } from '../src/app';

//Login For subsequent Testing
let cookie;
beforeAll(async () => {
    const res = await request(app)
        .post('/auth/login')
        .send({ name: 'Test User', password: '123456' });

    cookie = res.body.cookie;
});

//Checking if The Info Returned is Correct
describe('getInfo function', () => {
    it('should get user information', async () => {
        const res = await request(app)
            .get('/user/info')
            .query({ cookie: cookie })

        expect(res.status).toBe(200);
        expect(res.body).toEqual({
            name: 'Test User',
            bio: 'I am a Test User',
            photo: '',
        });
    });
});

//Check if the posts are returned Properly
describe('getPosts function', () => {
    it('should get user posts', async () => {
        const res = await request(app)
            .get('/user/posts')
            .query({ cookie: cookie });

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('posts');

        expect(res.body.posts).toBeInstanceOf(Array);
        for (const post of res.body.posts) {
            expect(post).toHaveProperty('title');
            expect(post).toHaveProperty('image');
        }
    });
});

//Checks if The Fields are Being Updated Correctly
describe('updateInfo function', () => {
    it('should update user info', async () => {
        const res = await request(app)
            .patch('/user/update')
            .query({ cookie: cookie })
            .send({ fields: ["photo"], values: ["Worked"] });

        expect(res.status).toBe(200);

        expect(res.body).toEqual({
            photo: 'Worked',
        });

        //Reverting Back The Changes
        await request(app)
            .patch('/user/update')
            .query({ cookie: cookie })
            .send({ fields: ["photo"], values: [""] });
    });
});

//Checks if Posts are returned Properly
describe('getSocialList function', () => {
    it('should get social list', async () => {
        const res = await request(app)
            .get('/user/social')
            .query({ cookie: cookie });

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('followers');
        expect(res.body).toHaveProperty('following');

        for (const follower of res.body.followers) {
            expect(follower).toHaveProperty('name');
            expect(follower).toHaveProperty('bio');
            expect(follower).toHaveProperty('photo');
        }

        for (const following of res.body.following) {
            expect(following).toHaveProperty('name');
            expect(following).toHaveProperty('bio');
            expect(following).toHaveProperty('photo');
        }
    });
});


// Closing database connection after all Tests 
afterAll(async () => {
    await close();
});
