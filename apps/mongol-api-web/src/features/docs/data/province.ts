const ClothesRestQuery = `fetch('https://mongol-api.vercel.app/api/clothes')
.then(res => res.json())
.then(json => console.log(json))`;

const ClothesGraphQLQuery = `GRAPHQL FETCHING EXAMPLE`;

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

const ClothesRestGraphQLResult = `Clothies GraphQL Result`;

const ClothesQueryParameters = {
  name: 'The name of the province',
  year: 'The year of the province',
  materials: 'The materials of the province',
  timePeriod: 'The time period of the province',
  description: 'The description of the province',
  images: 'The images of the province',
};

export const ClothesDocsData = {
  title: 'Clothes',
  ClothesRestQuery,
  ClothesRestQueryResult,
  ClothesGraphQLQuery,
  ClothesRestGraphQLResult,
  ClothesQueryParameters,
};
