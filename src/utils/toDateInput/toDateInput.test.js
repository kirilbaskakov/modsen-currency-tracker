import toDateInput from './toDateInput';

const date = new Date(Date.UTC(2012, 5, 20, 3, 0, 0));

test('to date input', () => {
  expect(toDateInput(date)).toBe('2012-06-20');
});
