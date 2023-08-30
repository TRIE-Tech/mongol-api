import request from 'supertest';
import express from 'express';
import clothesRouter from '../src/router/clothes';
import ethnicGroupsRouter from '../src/router/ethnic-groups';
import historicalToolsRouter from '../src/router/historical-tools';
import instrumentsRouter from '../src/router/instruments';
import touristAttractionsRouter from '../src/router/tourist-attractions';
import provinceRouter from '../src/router/provinces';

// Mocking the entire @mongol-api-data module
jest.mock('@mongol-api-data', () => ({
  clothesData: jest.fn(() => {
    throw new Error('Simulated error');
  }),
  ethnicGroupsData: jest.fn(() => {
    throw new Error('Simulated error');
  }),
  historicalToolsData: jest.fn(() => {
    throw new Error('Simulated error');
  }),
  instrumentsData: jest.fn(() => {
    throw new Error('Simulated error');
  }),
  provincesData: jest.fn(() => {
    throw new Error('Simulated error');
  }),
  touristAttractionsData: jest.fn(() => {
    throw new Error('Simulated error');
  }),
}));

const app = express();
app.use('/clothes', clothesRouter);
app.use('/ethnicGroups', ethnicGroupsRouter);
app.use('/historicalTools', historicalToolsRouter);
app.use('/instruments', instrumentsRouter);
app.use('/touristAttractions', touristAttractionsRouter);
app.use('/province', provinceRouter);

describe('Should throw error', () => {
  it('Should throw error when calling get clothes router', async () => {
    const response = await request(app).get('/clothes');
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: 'Internal error' });
  });

  it('Should throw error when calling get ethnicGroups router', async () => {
    const response = await request(app).get('/ethnicGroups');
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: 'Internal error' });
  });

  it('Should throw error when calling get historicalTools router', async () => {
    const response = await request(app).get('/historicalTools');
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: 'Internal error' });
  });

  it('Should throw error when calling get instruments router', async () => {
    const response = await request(app).get('/instruments');
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: 'Internal error' });
  });

  it('Should throw error when calling get touristAttractions router', async () => {
    const response = await request(app).get('/touristAttractions');
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: 'Internal error' });
  });

  it('Should throw error when calling get province router', async () => {
    const response = await request(app).get('/province');
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: 'Internal error' });
  });
});
