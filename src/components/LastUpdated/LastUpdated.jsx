import React from 'react';

import useRates from '@/hooks/useRates';

import { Container, Indicator, Text } from './styled';

function LastUpdated() {
  const { isLoading, meta } = useRates('USD');
  const date = new Date(meta?.last_updated_at);
  let dateString = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
  if (date.toLocaleDateString() !== new Date().toLocaleDateString()) {
    dateString = `${date.toLocaleDateString()} ${dateString}`;
  }

  return (
    <Container>
      <Indicator />
      <Text>Last updated at {isLoading ? 'Loading...' : dateString}</Text>
    </Container>
  );
}

export default LastUpdated;
