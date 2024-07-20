import React from 'react';
import CardList from '../components/CardList/CardList';
import currencyCards from '../constants/currencyCards';

const HomePage = () => {
  return (
    <div>
      {currencyCards.map(({ title, cards }) => (
        <CardList key={title} title={title} cards={cards} />
      ))}
    </div>
  );
};

export default HomePage;
