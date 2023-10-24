import { default as provincesData } from '../data/provinces.json';
import {
  generateGraphQLQuery,
  generateGraphQLQueryResult,
  generateQueryParameters,
  generateRestQuery,
  generateRestQueryResult,
} from '../utils';

export const ProvincesDemoData = {
  graphql: {
    query: generateGraphQLQuery(
      provincesData.data,
      provincesData.graphqlQueryName
    ),
    result: generateGraphQLQueryResult(
      provincesData.data,
      provincesData.graphqlQueryName
    ),
  },
  rest: {
    query: generateRestQuery(provincesData.restQueryName),
    result: generateRestQueryResult(provincesData.data),
  },
  queryParameters: generateQueryParameters(provincesData.params),
  panelInfo: {
    label: 'Provinces',
    value: 'provinces',
  },
};
