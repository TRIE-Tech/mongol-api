import Clothes from './data/clothes.json';
import EthnicGroups from './data/ethnic-groups.json';
import HistoricalTools from './data/historical-tools.json';
import Instruments from './data/instruments.json';
import Province from './data/provinces.json';
import TouristAttractions from './data/tourist-attractions.json';

export const clothesData = (): Array<Record<string, unknown>> => {
  return Clothes.data;
};

export const ethnicGroupsData = (): Array<Record<string, unknown>> => {
  return EthnicGroups.data;
};

export const historicalToolsData = (): Array<Record<string, unknown>> => {
  return HistoricalTools.data;
};

export const instrumentsData = (): Array<Record<string, unknown>> => {
  return Instruments.data;
};

export const provincesData = (): Array<Record<string, unknown>> => {
  return Province.data;
};

export const touristAttractionsData = () => {
  return TouristAttractions.data;
};
