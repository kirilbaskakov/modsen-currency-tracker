import genChartData from '.';

const startDate = new Date();
const data = genChartData(10, startDate);

test('length equal', () => {
  expect(data).toHaveLength(10);
});

test('properties x, o, h, l, c are in data', () => {
  data.forEach(item =>
    expect(item).toEqual(
      expect.objectContaining({
        x: expect.any(Date),
        o: expect.any(Number),
        h: expect.any(Number),
        l: expect.any(Number),
        c: expect.any(Number)
      })
    )
  );
});

test('date increasing', () => {
  const currDate = new Date(startDate);
  for (const { x } of data) {
    expect(x.toLocaleDateString('en-us')).toBe(
      currDate.toLocaleDateString('en-us')
    );
    currDate.setDate(currDate.getDate() + 1);
  }
});
