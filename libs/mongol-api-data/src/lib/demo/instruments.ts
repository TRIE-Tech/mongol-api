import { default as instrumentsData } from '../data/instruments.json';
import {
  generateGraphQLQuery,
  generateGraphQLQueryResult,
  generateQueryParameters,
  generateRestQuery,
  generateRestQueryResult,
} from '../utils';

export const InstrumentsDemoData = {
  graphql: {
    query: generateGraphQLQuery(
      instrumentsData.data,
      instrumentsData.graphqlQueryName
    ),
    result: generateGraphQLQueryResult(
      instrumentsData.data,
      instrumentsData.graphqlQueryName
    ),
  },
  rest: {
    query: generateRestQuery(instrumentsData.restQueryName),
    result: generateRestQueryResult(instrumentsData.data),
  },
  queryParameters: generateQueryParameters(instrumentsData.params),
  panelInfo: {
    label: 'Instruments',
    value: 'instruments',
  },
};
