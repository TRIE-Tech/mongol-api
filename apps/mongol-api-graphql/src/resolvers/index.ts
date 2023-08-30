import {
  getTraditionalClothes,
  getProvinces,
  getInstruments,
  getEthnicGroups,
  getHistoricalTools,
  getTouristAttractions,
} from './resolvers';

export const resolvers = {
  Query: {
    hello: () => 'Hello Worlds',
    getTraditionalClothes,
    getProvinces,
    getInstruments,
    getEthnicGroups,
    getHistoricalTools,
    getTouristAttractions,
  },
};
