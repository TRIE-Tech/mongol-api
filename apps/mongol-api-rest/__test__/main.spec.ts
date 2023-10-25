import {
  clothesData,
  ethnicGroupsData,
  historicalToolsData,
  instrumentsData,
  provincesData,
  touristAttractionsData,
  historicalFiguresData,
} from '@mongol-api-data';
import app from '../src/main';
import request from 'supertest';

describe('Should fetch data from each router', () => {
  it('Should test get /clothes endpoint', async () => {
    const response = await request(app).get('/clothes');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('clothes');
    expect(response.body.clothes).toEqual(clothesData());
  });

  it('Should test get /ethnicGroups endpoint', async () => {
    const response = await request(app).get('/ethnicGroups');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('ethnicGroups');
    expect(response.body.ethnicGroups).toEqual(ethnicGroupsData());
  });

  it('Should test get /historicalTools endpoint', async () => {
    const response = await request(app).get('/historicalTools');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('historicalTools');
    expect(response.body.historicalTools).toEqual(historicalToolsData());
  });

  it('Should test get /instruments endpoint', async () => {
    const response = await request(app).get('/instruments');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('instruments');
    expect(response.body.instruments).toEqual(instrumentsData());
  });

  it('Should test get /touristAttractions endpoint', async () => {
    const response = await request(app).get('/touristAttractions');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('touristAttractions');
    expect(response.body.touristAttractions).toEqual(touristAttractionsData());
  });

  it('Should test get /province endpoint', async () => {
    const response = await request(app).get('/provinces');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('provinces');
    expect(response.body.provinces).toEqual(provincesData());
  });

  it('Should test get /historicalFigures endpoint', async () => {
    const response = await request(app).get('/historicalFigures');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('historicalFigures');
    expect(response.body.historicalFigures).toEqual(historicalFiguresData());
  });

  it('Should test get /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello from Mongol API REST' });
  });
});
