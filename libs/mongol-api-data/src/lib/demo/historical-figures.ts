import { default as historicalPeopleData } from '../data/historical-figures.json';
import {
  generateGraphQLQuery,
  generateGraphQLQueryResult,
  generateQueryParameters,
  generateRestQuery,
  generateRestQueryResult,
} from '../utils';

export const HistoricalPeopleDemoData = {
  graphql: {
    query: generateGraphQLQuery(
      historicalPeopleData.data,
      historicalPeopleData.graphqlQueryName
    ),
    result: generateGraphQLQueryResult(
      historicalPeopleData.data,
      historicalPeopleData.graphqlQueryName
    ),
  },
  rest: {
    query: generateRestQuery(historicalPeopleData.restQueryName),
    result: generateRestQueryResult(historicalPeopleData.data),
  },
  queryParameters: generateQueryParameters(historicalPeopleData.params),
  panelInfo: {
    label: 'Historical Figures',
    value: 'historicalFigures',
  },
};
