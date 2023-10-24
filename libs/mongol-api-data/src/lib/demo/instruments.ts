import { default as data } from '../data/instruments.json';
import {
  generateGraphQLQuery,
  generateGraphQLQueryResult,
  generateQueryParameters,
  generateRestQuery,
  generateRestQueryResult,
} from '../utils';

export const InstrumentsDemoData = {
  graphql: {
    query: generateGraphQLQuery(data.data, data.graphqlQueryName),
    result: generateGraphQLQueryResult(data.data, data.graphqlQueryName),
  },
  rest: {
    query: generateRestQuery(data.restQueryName),
    result: generateRestQueryResult(data.data),
  },
  queryParameters: generateQueryParameters(data.params),
  panelInfo: {
    label: 'Instruments',
    value: 'instruments',
  },
};
