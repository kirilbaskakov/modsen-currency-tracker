import PropTypes from 'prop-types';
import React from 'react';

import Card from '../Card/Card';
import { CardsContainer, Separator, StyledList, Title } from './styled';

function CardList({ title, cards }) {
  return (
    <StyledList>
      <Title>{title}</Title>
      <Separator />
      <CardsContainer>
        {cards.map(({ icon, title: cardTitle, subtitle, exchangable }) => (
          <Card
            key={cardTitle}
            icon={icon}
            title={cardTitle}
            subtitle={subtitle}
            exchangable={exchangable}
          />
        ))}
      </CardsContainer>
    </StyledList>
  );
}

CardList.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      outlined: PropTypes.bool,
      exchangable: PropTypes.bool
    })
  )
};

export default CardList;
