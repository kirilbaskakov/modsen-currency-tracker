import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CardContainer, Icon, Subtitle, Text, Title } from './styled';
import ExchangeModal from '../ExchangeModal/ExchangeModal';

const Card = ({
  icon,
  title,
  subtitle,
  exchangable = false,
  outlined = true
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => exchangable && setIsOpen(true);

  const onClose = () => setIsOpen(false);

  return (
    <>
      <CardContainer
        $outlined={outlined}
        onClick={onClick}
        $isHoverable={exchangable}
      >
        <Icon src={icon} alt={title} />
        <Text>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Text>
      </CardContainer>
      {isOpen && (
        <ExchangeModal open={isOpen} onClose={onClose} currency={title} />
      )}
    </>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  outlined: PropTypes.bool,
  exchangable: PropTypes.bool
};

export default Card;
