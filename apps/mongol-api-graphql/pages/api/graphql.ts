import { gql } from '@apollo/client';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import { ApolloServer } from 'apollo-server-cloud-functions';
import TraditionClothes from '../../../../libs/data/clothes.json';

const typeDefs = gql`
  extend schema
    @link(
      url: "https://specs.apollo.dev/federation/v2.0"
      import: ["@key", "@shareable"]
    )

  type TraditionalClothes {
    id: String
    name: String
    description: String
    timePeriod: String
    materials: [String]
    images: [String]
  }

  type Query {
    hello: String
    getTraditionalClothes: [TraditionalClothes]
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello Worlds',
    getTraditionalClothes: () => {
      return TraditionClothes;
    },
  },
};

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
