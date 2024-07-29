import React from 'react';
import { PropTypes } from 'prop-types';
import { CardContainer, Icon, Subtitle, Text, Title } from './styled';

const Card = ({ icon, title, subtitle, outlined = true }) => {
  return (
    <CardContainer outlined={outlined}>
      <Icon src={icon} alt={title} />
      <Text>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Text>
    </CardContainer>
  );
};

Card.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  outlined: PropTypes.bool
};

export default Card;
