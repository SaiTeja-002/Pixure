import request from 'supertest';
import { app, close } from '../src/app';

//Login For subsequent Testing
let cookie;let _cookie;
beforeAll(async () => {
    let res = await request(app)
        .post('/auth/login')
        .send({ name: 'Test User', password: '123456' });
    cookie = res.body.cookie;

    // Login and get cookie for Test User New
    res = await request(app)
        .post('/auth/login')
        .send({ name: 'Test User Other', password: '123456' });

    _cookie = res.body.cookie;
});

describe('Add Post and Check User\'s Posts', () => {
    it('should add a post and update user\'s posts list', async () => {
        // Add a post
        const addPostRes = await request(app)
            .post('/post/add')
            .query({ cookie: cookie })
            .send({ title: 'Random Title', image: '', tags: ['test'] });

        expect(addPostRes.status).toBe(200);

        // Fetch user's posts
        const userPostsRes = await request(app)
            .get('/user/posts')
            .query({ cookie: cookie });

        expect(userPostsRes.status).toBe(200);
        expect(userPostsRes.body).toHaveProperty('posts');

        // Check if the added post is in the user's posts list
        const addedPost = userPostsRes.body.posts.find(post => post.title === 'Random Title');
        expect(addedPost).toBeDefined();
    });
});


describe('Search for Posts with Tag', () => {
    it('should search for posts with a specific tag', async () => {
        // Search for posts with the 'test' tag
        const searchTagRes = await request(app)
            .get('/tag/search')
            .query({ tag: 'test', cookie: _cookie });

        expect(searchTagRes.status).toBe(200);
        expect(searchTagRes.body).toHaveProperty('posts');

        const addedPostInSearch = searchTagRes.body.posts.find(post => post.title === 'Random Title');
        expect(addedPostInSearch).toBeDefined();
    });
});

describe('Search for Post by Title', () => {
    it('should search for a post by title', async () => {
        // Search for posts with the title 'Random Title'
        const searchTitleRes = await request(app)
            .get('/post/search/Random%20Title')
            .query({ cookie: _cookie });

        expect(searchTitleRes.status).toBe(200);
        expect(searchTitleRes.body).toHaveProperty('posts');

        const expectedPostInSearch = searchTitleRes.body.posts.find(post => post.title === 'Random Title');
        expect(expectedPostInSearch).toBeDefined();
    });
});

describe('Delete User Post', () => {
    it('should delete a user\'s post and update posts list', async () => {
        // Delete the user's post at index 0
        const deletePostRes = await request(app)
            .delete('/user/post/0')
            .query({ cookie: cookie });

        expect(deletePostRes.status).toBe(200);

        // Fetch user's posts after deletion
        const userPostsResAfterDeletion = await request(app)
            .get('/user/posts')
            .query({ cookie: cookie });

        expect(userPostsResAfterDeletion.body.posts).toHaveLength(0);
    });
});


// Closing database connection after all Tests 
afterAll(async () => {
    await close();
});
