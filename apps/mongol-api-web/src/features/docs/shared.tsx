import { HomePanel } from './panels';
import { ProvincePanel } from './panels/ProvincePanel';

export const TABS_DATA = [
  {
    label: 'Welcome!',
    value: 'home',
    panel: <HomePanel />,
  },
  {
    label: 'Provinces',
    value: 'provinces',
    panel: <ProvincePanel />,
  },
  {
    label: 'Clothes',
    value: 'clothes',
    panel: <ProvincePanel />,
  },
  {
    label: 'Instruments',
    value: 'instruments',
    panel: <ProvincePanel />,
  },
  {
    label: 'Ethnic Groups',
    value: 'ethnicGroups',
    panel: <ProvincePanel />,
  },
  {
    label: 'Tourist Attractions',
    value: 'touristAttractions',
    panel: <ProvincePanel />,
  },
  {
    label: 'Historical Tools',
    value: 'historicalTools',
    panel: <ProvincePanel />,
  },
];
