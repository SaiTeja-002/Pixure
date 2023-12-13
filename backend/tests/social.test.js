import request from 'supertest';
import { app, close } from '../src/app';

let cookie_1; let cookie_2;
beforeAll(async () => {
    // Login and get cookie for Test User
    let res = await request(app)
        .post('/auth/login')
        .send({ name: 'Test User', password: '123456' });

    cookie_1 = res.body.cookie;

    // Login and get cookie for Test User New
    res = await request(app)
        .post('/auth/login')
        .send({ name: 'Test User Other', password: '123456' });

    cookie_2 = res.body.cookie;
});

//Util Function to Check the Size of Followers
async function checkSocialListSize(cookie, expectedSize, flag) {
    const res = await request(app)
        .get('/user/social')
        .query({ cookie: cookie });

    expect(res.status).toBe(200);

    if (cookie == cookie_2) {
        expect(res.body.followers).toHaveLength(expectedSize);
    }

    if (cookie == cookie_1) {
        expect(res.body.following).toHaveLength(expectedSize);
    }
}

describe('Follow and Unfollow User', () => {
    it('should follow and unfollow a user', async () => {
        // Follow user
        const followRes = await request(app)
            .patch('/user/follow')
            .query({ cookie: cookie_1 })
            .send({ account: 'Test User Other' });

        expect(followRes.status).toBe(200);
        await checkSocialListSize(cookie_1, 1);
        await checkSocialListSize(cookie_2, 1);

        // Unfollow user
        const unfollowRes = await request(app)
            .patch('/user/unfollow')
            .query({ cookie: cookie_1 })
            .send({ account: 'Test User Other' });

        expect(unfollowRes.status).toBe(200);
        await checkSocialListSize(cookie_1, 0);
        await checkSocialListSize(cookie_2, 0);
    });
});

describe('Get Profile Information', () => {
    it('should receive profile info correctly', async () => {
        const res = await request(app)
            .get('/user/profile/Test%20User%20Other')
            .query({ cookie: cookie_1 });

        expect(res.status).toBe(200);
        expect(res.body).toEqual({
            name: 'Test User Other',
            bio: 'I am a Test User Other',
            photo: '',
            followerCount: 0,
            followingCount: 0,
            isFollowing: false,
            posts: expect.any(Array),
        });

        if (res.body.posts.length > 0) {
            const firstPost = res.body.posts[0];
            expect(firstPost).toEqual({
                photo: expect.any(String),
                owner: 'Test User Other',
                title: expect.any(String),
            });
        }
    });
});

// Closing database connection after all Tests 
afterAll(async () => {
    await close();
});