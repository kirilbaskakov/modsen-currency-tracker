import mockBanks from './mockBanks';

const banks = [
  {
    id: 0,
    name: 'bank 1'
  },
  {
    id: 1,
    name: 'bank 2'
  },
  {
    id: 2,
    name: 'bank 3'
  }
];

const mockedCurrencies = ['usd', 'eur', 'btc', 'rub', 'byn'];

const mocked = mockBanks(banks, mockedCurrencies);

test('have property currencies which is array with length > 0', () => {
  mocked.forEach(({ currencies }) => {
    expect(Array.isArray(currencies)).toBe(true);
    expect(currencies.length).toBeGreaterThan(0);
  });
});

test('to have original properties', () => {
  mocked.forEach(({ currencies, ...other }, index) => {
    expect({ ...other }).toEqual(banks[index]);
  });
});
