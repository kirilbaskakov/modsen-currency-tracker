import chartTooltip from './chartTooltip';

const items = [
  {
    raw: {
      x: new Date('23-05-2017'),
      o: 5,
      c: 10,
      l: 3,
      h: 15
    }
  }
];
test('tooltip title match snapshot', () => {
  const title = chartTooltip.callbacks.title(items);
  expect(title).toMatchSnapshot();
});

test('tooltip body match snapshot', () => {
  const bodyText = chartTooltip.callbacks.beforeBody(items);
  expect(bodyText).toMatchSnapshot();
});
