import { default as historicalToolsData } from '../data/historical-tools.json';
import {
  generateGraphQLQuery,
  generateGraphQLQueryResult,
  generateQueryParameters,
  generateRestQuery,
  generateRestQueryResult,
} from '../utils';

export const HistoricalToolsDemoData = {
  graphql: {
    query: generateGraphQLQuery(
      historicalToolsData.data,
      historicalToolsData.graphqlQueryName
    ),
    result: generateGraphQLQueryResult(
      historicalToolsData.data,
      historicalToolsData.graphqlQueryName
    ),
  },
  rest: {
    query: generateRestQuery(historicalToolsData.restQueryName),
    result: generateRestQueryResult(historicalToolsData.data),
  },
  queryParameters: generateQueryParameters(historicalToolsData.params),
  panelInfo: {
    label: 'Historical Tools',
    value: 'historicalTools',
  },
};
