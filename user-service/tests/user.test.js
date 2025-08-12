const request = require('supertest');
const app = require('../server');
const User = require('../src/models/userModel');

describe('User API', () => {
    beforeEach(async () => {
        await User.deleteMany(); // Clear the database before each test
    });

    it('should create a new user', async () => {
        const response = await request(app)
            .post('/api/users')
            .send({ name: 'John Doe', email: 'john@example.com', password: 'password123' });
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('_id');
    });

    it('should get a user by ID', async () => {
        const user = await User.create({ name: 'Jane Doe', email: 'jane@example.com', password: 'password123' });
        const response = await request(app).get(`/api/users/${user._id}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Jane Doe');
    });
});