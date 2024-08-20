const mockBanks = (features, currencies) => {
  const currenciesNames = Object.keys(currencies);
  const selectRandomCurrencies = () => {
    const amount = Math.ceil(Math.random() * 3 + 1);
    const result = new Set();
    while (result.size < amount) {
      result.add(
        currenciesNames[Math.floor(Math.random() * currenciesNames.length)]
      );
    }
    return Array.from(result);
  };

  return features.map(feature => ({
    ...feature,
    currencies: selectRandomCurrencies()
  }));
};

export default mockBanks;
