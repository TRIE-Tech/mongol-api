import {
  getTraditionalClothes,
  getProvinces,
  getInstruments,
  getEthnicGroups,
  getHistoricalTools,
  getTouristAttractions,
  getHistoricalFigures,
} from './resolvers';

export const resolvers = {
  Query: {
    hello: () => 'Hello Worlds',
    getTraditionalClothes,
    getProvinces,
    getInstruments,
    getEthnicGroups,
    getHistoricalTools,
    getHistoricalFigures,
    getTouristAttractions,
  },
};
