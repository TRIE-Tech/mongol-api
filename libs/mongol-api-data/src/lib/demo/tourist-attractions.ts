import { default as touristAttractionsData } from '../data/tourist-attractions.json';
import {
  generateGraphQLQuery,
  generateGraphQLQueryResult,
  generateQueryParameters,
  generateRestQuery,
  generateRestQueryResult,
} from '../utils';

export const TouristAttractionsDemoData = {
  graphql: {
    query: generateGraphQLQuery(
      touristAttractionsData.data,
      touristAttractionsData.graphqlQueryName
    ),
    result: generateGraphQLQueryResult(
      touristAttractionsData.data,
      touristAttractionsData.graphqlQueryName
    ),
  },
  rest: {
    query: generateRestQuery(touristAttractionsData.restQueryName),
    result: generateRestQueryResult(touristAttractionsData.data),
  },
  queryParameters: generateQueryParameters(touristAttractionsData.params),
  panelInfo: {
    label: 'Tourist Attractions',
    value: 'touristAttractions',
  },
};
