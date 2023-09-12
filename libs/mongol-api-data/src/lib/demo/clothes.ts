const ClothesGraphQLQuery = `query GetTraditionalClothes {
  getTraditionalClothes {
    id
    name
    description
    timePeriod
    materials
    images
  }
}`;

const ClothesGraphQLQueryResult = `
{
  "data": {
    "getTraditionalClothes": [
      {
        "id": "1",
        "name": "Deel",
        "description": "The deel is a traditional Mongolian clothing item, usually made from silk, cotton, or wool. It has a distinctive design with a wide cut and high collar.",
        "timePeriod": "13th - 21st centuries",
        "materials": [
          "Silk",
          "Cotton",
          "Wool"
        ],
        "images": [
          "image_url_deel_1",
          "image_url_deel_2"
        ]
      },
      {
        "id": "2",
        "name": "Tsaatan Coat",
        "description": "The Tsaatan coat is worn by the Tsaatan people, an ethnic group of reindeer herders. It's made from reindeer hide and provides warmth in the harsh Mongolian climate.",
        "timePeriod": "20th - 21st centuries",
        "materials": [
          "Reindeer hide",
          "Fur"
        ],
        "images": [
          "image_url_tsaatan_coat_1",
          "image_url_tsaatan_coat_2"
        ]
      },
      {
        "id": "3",
        "name": "Khadag",
        "description": "The khadag is a ceremonial silk scarf used in various occasions, symbolizing respect and good wishes. It's often presented as a sign of honor and appreciation.",
        "timePeriod": "17th - 21st centuries",
        "materials": [
          "Silk"
        ],
        "images": [
          "image_url_khadag_1",
          "image_url_khadag_2"
        ]
      },
    ]
  }
}
`;

const ClothesRestQuery = `fetch('https://mongol-api.vercel.app/api/clothes')
.then(res => res.json())
.then(json => console.log(json))`;

const ClothesRestQueryResult = `{
  "id": "1",
  "name": "Deel",
  "description": "The deel is a traditional Mongolian clothing item, usually made from silk, cotton, or wool. It has a distinctive design with a wide cut and high collar.",
  "timePeriod": "13th - 21st centuries",
  "materials": [
    "Silk",
    "Cotton",
    "Wool"
  ],
  "images": [
    "image_url_deel_1",
    "image_url_deel_2"
  ]
}`;

export const ClothesDocsData = {
  graphql: {
    query: ClothesGraphQLQuery,
    result: ClothesGraphQLQueryResult,
  },
  rest: {
    query: ClothesRestQuery,
    result: ClothesRestQueryResult,
  },
};
