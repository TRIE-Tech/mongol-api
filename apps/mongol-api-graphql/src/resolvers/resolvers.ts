import {
  clothesData,
  provincesData,
  instrumentsData,
  ethnicGroupsData,
  historicalToolsData,
  touristAttractionsData,
  historicalFiguresData,
} from '@mongol-api-data';
import { graphqlErrorHandler } from './error';

export const getTraditionalClothes = () => {
  try {
    return clothesData();
  } catch (error) {
    throw graphqlErrorHandler({ message: error as string });
  }
};
export const getProvinces = () => {
  try {
    return provincesData();
  } catch (error) {
    throw graphqlErrorHandler({ message: error as string });
  }
};

export const getHistoricalFigures = () => {
  try {
    return historicalFiguresData();
  } catch (error) {
    throw graphqlErrorHandler({ message: error as string });
  }
};

export const getInstruments = () => {
  try {
    return instrumentsData();
  } catch (error) {
    throw graphqlErrorHandler({ message: error as string });
  }
};
export const getEthnicGroups = () => {
  try {
    return ethnicGroupsData();
  } catch (error) {
    throw graphqlErrorHandler({ message: error as string });
  }
};
export const getHistoricalTools = () => {
  try {
    return historicalToolsData();
  } catch (error) {
    throw graphqlErrorHandler({ message: error as string });
  }
};

export const getTouristAttractions = () => {
  try {
    return touristAttractionsData();
  } catch (error) {
    throw graphqlErrorHandler({ message: error as string });
  }
};
