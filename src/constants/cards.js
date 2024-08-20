import { currencies, stocks } from './currenciesData';

const cards = (rates, isLoading) => [
  {
    title: 'Stocks',
    cards: stocks
  },
  {
    title: 'Quotes',
    cards: Object.entries(currencies).map(([title, currency]) => ({
      title,
      subtitle: isLoading
        ? 'Loading...'
        : `R$ ${Number((1 / rates[currency.code]?.value).toFixed(5))}`,
      icon: currency.icon,
      exchangable: true
    }))
  }
];

export default cards;
