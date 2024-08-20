import getRelevant from './getRelevant';

const values = [
  'Commercial Dollar',
  'Australian Dollar',
  'Euro',
  'Bitcoin',
  'Won'
];

test('gets relevant', () => {
  const result = getRelevant('Dollar', values);
  expect(result).toEqual([values[0], values[1]]);
});

test('ignore case', () => {
  const result = getRelevant('DoLLaR', values);
  expect(result).toEqual([values[0], values[1]]);
});

test('gets nothing', () => {
  const result = getRelevant('Ruble', values);
  expect(result).toEqual([]);
});

test('empty string', () => {
  const result = getRelevant('', values);
  expect(result).toEqual(values);
});
