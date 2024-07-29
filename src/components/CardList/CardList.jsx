import React from 'react';
import Card from '../Card/Card';
import { CardsContainer, Separator, StyledList, Title } from './styled';

const CardList = ({ title, cards }) => {
  return (
    <StyledList>
      <Title>{title}</Title>
      <Separator />
      <CardsContainer>
        {cards.map(({ icon, title, subtitle }) => (
          <Card icon={icon} title={title} subtitle={subtitle} />
        ))}
      </CardsContainer>
    </StyledList>
  );
};

export default CardList;
