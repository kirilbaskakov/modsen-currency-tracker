import React from 'react';
import * as S from './styled';
import Card from '../Card/Card';

const CardList = ({ title, cards }) => {
  return (
    <S.StyledList>
      <S.Title>{title}</S.Title>
      <S.Separator />
      <S.CardsContainer>
        {cards.map(({ icon, title, subtitle }) => (
          <Card icon={icon} title={title} subtitle={subtitle} />
        ))}
      </S.CardsContainer>
    </S.StyledList>
  );
};

export default CardList;
