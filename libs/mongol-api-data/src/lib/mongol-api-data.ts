import Clothes from './data/clothes.json';
import EthnicGroups from './data/ethnic-group.json';
import HistoricalTools from './data/historical-tools.json';
import Instruments from './data/instrument.json';
import Province from './data/province.json';
import TouristAttractions from './data/tourist-attractions.json';

export const clothesData = (): Array<Record<string, unknown>> => {
  return Clothes;
};

export const ethnicGroupsData = (): Array<Record<string, unknown>> => {
  return EthnicGroups;
};

export const historicalToolsData = (): Array<Record<string, unknown>> => {
  return HistoricalTools;
};

export const instrumentsData = (): Array<Record<string, unknown>> => {
  return Instruments;
};

export const provincesData = (): Array<Record<string, unknown>> => {
  return Province;
};

export const touristAttractionsData = () => {
  return TouristAttractions;
};
