import { currencies } from '../constants/currencyCards';

const mockBanks = features => {
  const selectRandomCurrencies = () => {
    const amount = Math.ceil(Math.random() * 3 + 1);
    const result = new Set();
    while (result.size < amount) {
      result.add(currencies[Math.floor(Math.random() * currencies.length)]);
    }
    return Array.from(result);
  };

  return features.map(feature => ({
    ...feature,
    currencies: selectRandomCurrencies()
  }));
};

export default mockBanks;
