import { buildSubgraphSchema } from '@apollo/subgraph';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import { ApolloServer } from 'apollo-server-cloud-functions';
import { typeDefs } from '../../types';
import { resolvers } from '../../resolvers';

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs: typeDefs, resolvers: resolvers }),
  csrfPrevention: true,
  cache: new InMemoryLRUCache(),
  context: ({ req, res }: { req: Request; res: Response }) => ({
    headers: req.headers,
    req,
    res,
  }),
  introspection: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const graphqlHandler = server.createHandler();
export default graphqlHandler;
