import { default as clothesData } from '../data/clothes.json';
import {
  generateGraphQLQuery,
  generateGraphQLQueryResult,
  generateQueryParameters,
  generateRestQuery,
  generateRestQueryResult,
} from '../utils';

export const ClothesDemoData = {
  graphql: {
    query: generateGraphQLQuery(clothesData.data, clothesData.graphqlQueryName),
    result: generateGraphQLQueryResult(
      clothesData.data,
      clothesData.graphqlQueryName
    ),
  },
  rest: {
    query: generateRestQuery(clothesData.restQueryName),
    result: generateRestQueryResult(clothesData.data),
  },
  queryParameters: generateQueryParameters(clothesData.params),
  panelInfo: {
    label: 'Clothes',
    value: 'clothes',
  },
};
