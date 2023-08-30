import { getTraditionalClothes } from '../src/resolvers/resolvers';
import { clothesData } from '@mongol-api-data';

jest.mock('@mongol-api-data', () => ({
  clothesData: jest.fn(),
  provincesData: jest.fn(),
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

    (clothesData as jest.Mock).mockResolvedValue(mockProvinceDataResult);

    const result = await getTraditionalClothes();
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

    (clothesData as jest.Mock).mockResolvedValue(mockInstrumentDataResult);

    const result = await getTraditionalClothes();
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

    (clothesData as jest.Mock).mockResolvedValue(mockEthnicGroupDataResult);

    const result = await getTraditionalClothes();
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

    (clothesData as jest.Mock).mockResolvedValue(mockHistoricalToolDataResult);

    const result = await getTraditionalClothes();
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

    (clothesData as jest.Mock).mockResolvedValue(
      mockTouristAttractionDataResult
    );

    const result = await getTraditionalClothes();
    expect(result).toEqual(mockTouristAttractionDataResult);
  });
});
