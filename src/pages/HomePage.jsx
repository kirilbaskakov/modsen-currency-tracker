import React from 'react';
import CardList from '@/components/CardList/CardList';
import { currencies, stocks } from '@/constants/currenciesData';
import useRates from '@/hooks/useRates';

const HomePage = () => {
  const { rates, isLoading } = useRates('USD');

  const cards = [
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
          : 'R$ ' + Number((1 / rates[currency.code]?.value).toFixed(5)),
        icon: currency.icon,
        exchangable: true
      }))
    }
  ];

  return (
    <>
      {cards.map(({ title, cards }) => (
        <CardList key={title} title={title} cards={cards} />
      ))}
    </>
  );
};

export default HomePage;
