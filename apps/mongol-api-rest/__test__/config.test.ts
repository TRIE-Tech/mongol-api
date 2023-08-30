import app from '../src/main';
import request from 'supertest';

describe('Should test server host and port env', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();

    // Set up environment variables directly before each test
    process.env.HOST = 'test';
    process.env.PORT = undefined;
  });

  afterEach(() => {
    // Clear the environment variables after each test
    process.env.HOST = undefined;
    process.env.PORT = undefined;

    jest.resetModules();
  });

  it('should get a welcome message', async () => {
    // Import 'app' and 'request' modules within the test to ensure the environment is set up correctly
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello from Mongol API REST' });
  });
});
