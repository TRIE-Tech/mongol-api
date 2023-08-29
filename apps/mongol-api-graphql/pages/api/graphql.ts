import { gql } from '@apollo/client';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import { ApolloServer } from 'apollo-server-cloud-functions';
import {
  clothesData,
  provincesData,
  instrumentsData,
  ethnicGroupsData,
  historicalToolsData,
  touristAttractionsData,
} from '@mongol-api-data';

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

  type Province {
    id: String
    name: String
    area: Int
    population: Int
    capital: String
    soums: [String]
    thumbnail: String
    images: [String]
  }

  type Instrument {
    id: String
    name: String
    description: String
    thumbnail: String
    images: [String]
  }

  type EthnicGroup {
    id: String
    name: String
    linguistic: String
    population: Int
    traditionalCostume: [String]
    thumbnail: String
    images: [String]
  }

  type HistoricalTool {
    id: String
    name: String
    description: String
    timePeriod: String
    material: [String]
    usage: String
    images: [String]
  }

  type Address {
    street: String
    city: String
    country: String
    postalCode: String
  }

  type TouristAttraction {
    id: String
    name: String
    description: String
    address: Address
    images: [String]
  }

  type Query {
    hello: String
    getTraditionalClothes: [TraditionalClothes]
    getProvinces: [Province]
    getInstruments: [Instrument]
    getEthnicGroups: [EthnicGroup]
    getHistoricalTools: [HistoricalTool]
    getTouristAttractions: [TouristAttraction]
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello Worlds',
    getTraditionalClothes: () => {
      return clothesData();
    },
    getProvinces: () => {
      return provincesData();
    },
    getInstruments: () => {
      return instrumentsData();
    },
    getEthnicGroups: () => {
      return ethnicGroupsData();
    },
    getHistoricalTools: () => {
      return historicalToolsData();
    },
    getTouristAttractions: () => {
      return touristAttractionsData();
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
