import { GraphQLError } from 'graphql';

export const graphqlErrorHandler = (error: { message: string }) => {
  return new GraphQLError(error.message, {
    extensions: {
      http: { status: 500 },
    },
  });
};
