import {
  getEthnicGroups,
  getHistoricalFigures,
  getHistoricalTools,
  getInstruments,
  getProvinces,
  getTouristAttractions,
  getTraditionalClothes,
} from '../src/resolvers/resolvers';

jest.mock('@mongol-api-data', () => ({
  clothesData: jest.fn(() => {
    throw new Error('Error');
  }),
}));

describe(' Should test resolver errors', () => {
  it('1. getTraditionalClothes error', async () => {
    try {
      await getTraditionalClothes();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('2. getProvinces error', async () => {
    try {
      await getProvinces();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('3. getInstruments error', async () => {
    try {
      await getInstruments();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('4. getEthnicGroups error', async () => {
    try {
      await getEthnicGroups();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('5. getHistoricalTools error', async () => {
    try {
      await getHistoricalTools();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('6. getTouristAttractions error', async () => {
    try {
      await getTouristAttractions();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('7. getHistoricalFigures error', async () => {
    try {
      await getHistoricalFigures();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
