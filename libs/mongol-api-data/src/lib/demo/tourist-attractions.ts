import { default as data } from '../data/tourist-attractions.json';
import {
  generateGraphQLQuery,
  generateGraphQLQueryResult,
  generateQueryParameters,
  generateRestQuery,
  generateRestQueryResult,
} from '../utils';

export const TouristAttractionsDemoData = {
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
    label: 'Tourist Attractions',
    value: 'touristAttractions',
  },
};
