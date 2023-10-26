import { HomePanel } from './panels';
import { CodePanel } from './panels/CodePanel';
import {
  ClothesDemoData,
  InstrumentsDemoData,
  ProvincesDemoData,
  HistoricalToolsDemoData,
  EthnicGroupsDemoData,
  TouristAttractionsDemoData,
} from '../../../../../libs/mongol-api-data/src/lib/demo';

const totalDemoData = [
  ClothesDemoData,
  InstrumentsDemoData,
  HistoricalToolsDemoData,
  EthnicGroupsDemoData,
  ProvincesDemoData,
  TouristAttractionsDemoData,
];

export const TABS_DATA = [
  {
    label: 'Welcome!',
    value: 'home',
    panel: <HomePanel />,
  },
  ...totalDemoData.map(({ panelInfo, rest, graphql, queryParameters }) => ({
    label: panelInfo.label,
    value: panelInfo.value,
    panel: (
      <CodePanel
        restQuery={rest.query}
        restQueryResult={rest.result}
        graphQLQuery={graphql.query}
        graphQLQueryResults={graphql.result}
        queryParameters={queryParameters}
      />
    ),
  })),
];
