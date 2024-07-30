import addDays from './addDays';

test('add days', () => {
  const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  expect(addDays(date, 2).toLocaleDateString('en-us')).toBe(
    new Date(Date.UTC(2012, 11, 22, 3, 0, 0)).toLocaleDateString('en-us')
  );
});

test('date not changed', () => {
  const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  addDays(date, 2);
  expect(date.toLocaleDateString('en-us')).toBe(
    new Date(Date.UTC(2012, 11, 20, 3, 0, 0)).toLocaleDateString('en-us')
  );
});

test('transition in a year', () => {
  const date = new Date(Date.UTC(2012, 11, 29, 3, 0, 0));
  expect(addDays(date, 3).toLocaleDateString('en-us')).toBe(
    new Date(Date.UTC(2013, 0, 1, 3, 0, 0)).toLocaleDateString('en-us')
  );
});
