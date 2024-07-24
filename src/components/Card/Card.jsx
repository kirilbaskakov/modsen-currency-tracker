import React from 'react';
import { PropTypes } from 'prop-types';
import * as S from './styled';

const Card = ({ icon, title, subtitle, outlined = true }) => {
  return (
    <S.Card outlined={outlined}>
      <S.Icon src={icon} alt={title} />
      <S.Text>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Text>
    </S.Card>
  );
};

Card.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  outlined: PropTypes.bool
};

export default Card;
