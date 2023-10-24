import { default as ethnicGroupsData } from '../data/ethnic-groups.json';
import {
  generateGraphQLQuery,
  generateGraphQLQueryResult,
  generateQueryParameters,
  generateRestQuery,
  generateRestQueryResult,
} from '../utils';

export const EthnicGroupsDemoData = {
  graphql: {
    query: generateGraphQLQuery(
      ethnicGroupsData.data,
      ethnicGroupsData.graphqlQueryName
    ),
    result: generateGraphQLQueryResult(
      ethnicGroupsData.data,
      ethnicGroupsData.graphqlQueryName
    ),
  },
  rest: {
    query: generateRestQuery(ethnicGroupsData.restQueryName),
    result: generateRestQueryResult(ethnicGroupsData.data),
  },
  queryParameters: generateQueryParameters(ethnicGroupsData.params),
  panelInfo: {
    label: 'Ethnic Groups',
    value: 'ethnicGroups',
  },
};
