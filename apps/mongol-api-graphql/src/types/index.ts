import { gql } from '@apollo/client';

export const typeDefs = gql`
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
