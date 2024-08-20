import React from 'react';

import CardList from '@/components/CardList/CardList';
import cards from '@/constants/cards';
import useRates from '@/hooks/useRates';

function HomePage() {
  const { rates, isLoading } = useRates('USD');

  const cardsList = cards(rates, isLoading);

  return (
    <>
      {cardsList.map(({ title, cards }) => (
        <CardList key={title} title={title} cards={cards} />
      ))}
    </>
  );
}

export default HomePage;
