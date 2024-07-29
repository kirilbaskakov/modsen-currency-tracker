import React from 'react';
import { Container, Indicator, Text } from './styled';

const LastUpdated = () => {
  const updatedAt = '11:59pm';
  return (
    <Container>
      <Indicator />
      <Text>Last updated at {updatedAt}</Text>
    </Container>
  );
};

export default LastUpdated;
