import { default as data } from '../data/clothes.json';
import {
  generateGraphQLQuery,
  generateGraphQLQueryResult,
  generateQueryParameters,
  generateRestQuery,
  generateRestQueryResult,
} from '../utils';

export const ClothesDemoData = {
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
    label: 'Clothes',
    value: 'clothes',
  },
};
