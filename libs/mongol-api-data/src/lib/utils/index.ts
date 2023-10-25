import { upperFirst } from 'lodash';

type DataType = Record<
  string,
  string | string[] | number | Record<string, string>
>[];

// Generate GraphQL query
export const generateGraphQLQuery = (
  data: DataType,
  graphqlQueryName: string
) => {
  const fields = Object.keys(data[0]);
  const query = `query ${upperFirst(graphqlQueryName)} {
  ${graphqlQueryName} {
    ${fields.map((field) => field).join('\n    ')}
  }
}`;
  return query;
};

// Generate GraphQL query result
export const generateGraphQLQueryResult = (
  data: DataType,
  queryName: string
) => {
  const selectedData = data.slice(0, 1).map((item) => {
    if (item.images) {
      const images = item.images as string[];
      item.images = images.map((image) => `${image}`);
    }
    return item;
  });
  const additionalItemsCount = data.length - 1;
  const additionalItemsText = `${additionalItemsCount} more`;

  const result = {
    data: {
      [queryName]: selectedData,
      '...': additionalItemsText,
    },
  };

  return JSON.stringify(result, null, 2);
};

// Generate REST query
export const generateRestQuery = (dataName: string) => {
  return `fetch('https://mongol-api.vercel.app/api/${dataName}')
    .then(res => res.json())
    .then(json => console.log(json))`;
};

// Generate REST query result
export const generateRestQueryResult = (data: DataType) => {
  const additionalItemsCount = data.length - 1;
  const additionalItemsText = `${additionalItemsCount} more`;
  const firstItem = data[0];
  if (firstItem.images) {
    const images = firstItem.images as string[];
    firstItem.images = images.map((image) => `${image}`);
  }
  const resultArray = [firstItem, `... ${additionalItemsText}`];
  return JSON.stringify(resultArray, null, 2);
};

// Generate query parameters
export const generateQueryParameters = (
  queryParams: Record<string, string>
) => {
  const params: Record<string, string> = {};
  for (const key in queryParams) {
    params[key] = queryParams[key];
  }
  return params;
};
