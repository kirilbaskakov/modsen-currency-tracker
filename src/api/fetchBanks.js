import { currencies } from '@/constants/currenciesData';
import mockBanks from '@/utils/mockBanks';

const fetchBanks = (longitude, latitude) => {
  return fetch(
    `https://api.mapbox.com/search/searchbox/v1/category/bank?access_token=${process.env.API_TOKEN}&limit=25&proximity=${longitude}%2C${latitude}`
  )
    .then(res => res.json())
    .then(({ features }) => mockBanks(features, currencies));
};

export default fetchBanks;
