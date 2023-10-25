import {
  getEthnicGroups,
  getHistoricalFigures,
  getHistoricalTools,
  getInstruments,
  getProvinces,
  getTouristAttractions,
  getTraditionalClothes,
} from '../src/resolvers/resolvers';
import {
  clothesData,
  ethnicGroupsData,
  historicalToolsData,
  instrumentsData,
  provincesData,
  touristAttractionsData,
  historicalFiguresData,
} from '@mongol-api-data';

jest.mock('@mongol-api-data', () => ({
  clothesData: jest.fn(),
  provincesData: jest.fn(),
  ethnicGroupsData: jest.fn(),
  historicalToolsData: jest.fn(),
  touristAttractionsData: jest.fn(),
  historicalFiguresData: jest.fn(),
  instrumentsData: jest.fn(),
}));

describe('Should test all the resolvers', () => {
  it('1. getTraditionalClothes', async () => {
    const mockClothesDataResult = {
      id: '1',
      name: 'Deel',
      description:
        'The deel is a traditional Mongolian clothing item, usually made from silk, cotton, or wool. It has a distinctive design with a wide cut and high collar.',
      timePeriod: '13th - 21st centuries',
      materials: ['Silk', 'Cotton', 'Wool'],
      images: ['image_url_deel_1', 'image_url_deel_2'],
    };

    (clothesData as jest.Mock).mockResolvedValue(mockClothesDataResult);

    const result = await getTraditionalClothes();
    expect(result).toEqual(mockClothesDataResult);
  });

  it('2. getProvinces', async () => {
    const mockProvinceDataResult = {
      id: '1',
      name: 'Ulaanbaatar',
      area: 4704,
      population: 1473000,
      capital: 'Ulaanbaatar',
      soums: ['Bayanzürkh', 'Sükhbaatar', 'Chingeltei'],
      thumbnail: 'thumbnail_url_1',
      images: ['image_url_1_1', 'image_url_1_2'],
    };

    (provincesData as jest.Mock).mockResolvedValue(mockProvinceDataResult);

    const result = await getProvinces();
    expect(result).toEqual(mockProvinceDataResult);
  });

  it('3. getInstruments', async () => {
    const mockInstrumentDataResult = {
      id: '1',
      name: 'Morin Khuur',
      description:
        "A traditional horsehead fiddle with two strings, representing a horse's head and body.",
      thumbnail: 'thumbnail_url_1',
      images: ['image_url_1_1', 'image_url_1_2'],
    };

    (instrumentsData as jest.Mock).mockResolvedValue(mockInstrumentDataResult);

    const result = await getInstruments();
    expect(result).toEqual(mockInstrumentDataResult);
  });

  it('4. getEthnicGroups', async () => {
    const mockEthnicGroupDataResult = {
      id: '1',
      name: 'Khalkha',
      linguistic: 'Mongolic',
      population: 2500000,
      traditionalCostume: ['costume_url_1_1', 'costume_url_1_2'],
      thumbnail: 'thumbnail_url_1',
      images: ['image_url_1_1', 'image_url_1_2'],
    };

    (ethnicGroupsData as jest.Mock).mockResolvedValue(
      mockEthnicGroupDataResult
    );

    const result = await getEthnicGroups();
    expect(result).toEqual(mockEthnicGroupDataResult);
  });

  it('5. getHistoricalTools', async () => {
    const mockHistoricalToolDataResult = {
      id: '1',
      name: 'Yatga',
      description:
        'A traditional Mongolian plucked zither, similar to the Chinese guzheng.',
      thumbnail: 'thumbnail_url_1',
      images: ['image_url_1_1', 'image_url_1_2'],
    };

    (historicalToolsData as jest.Mock).mockResolvedValue(
      mockHistoricalToolDataResult
    );

    const result = await getHistoricalTools();
    expect(result).toEqual(mockHistoricalToolDataResult);
  });

  it('6. getTouristAttractions', async () => {
    const mockTouristAttractionDataResult = {
      id: '1',
      name: 'Genghis Khan Statue Complex',
      description:
        'A 40m tall statue of Genghis Khan on horseback, on the bank of the Tuul River at Tsonjin Boldog, where according to legend, he found a golden whip.',
      location: 'Tsonjin Boldog, Tuv Province',
      thumbnail: 'thumbnail_url_1',
      images: ['image_url_1_1', 'image_url_1_2'],
    };

    (touristAttractionsData as jest.Mock).mockResolvedValue(
      mockTouristAttractionDataResult
    );
    const result = await getTouristAttractions();
    expect(result).toEqual(mockTouristAttractionDataResult);
  });

  it('6. getHistoricalFigures', async () => {
    const mockHistoricalFigureDataResult = {
      id: '10',
      name: 'Yondonjamtsaa Tseyenpiliin',
      dateOfBirth: '1896-12-30',
      countryOfBirth: 'Mongolia',
      dateOfDeath: '1938-03-08',
      accomplishment: [
        'A Mongolian poet, writer, and translator',
        'Considered one of the most important figures in modern Mongolian literature',
        'His works helped to promote Mongolian culture and identity during a time of great political and social upheaval',
      ],
      images: [
        'https://image-service-kappa.vercel.app/images/people/yondonjamtsaa-tseyenpiliin.jpg',
      ],
    };

    (historicalFiguresData as jest.Mock).mockResolvedValue(
      mockHistoricalFigureDataResult
    );
    const result = await getHistoricalFigures();
    expect(result).toEqual(mockHistoricalFigureDataResult);
  });
});
