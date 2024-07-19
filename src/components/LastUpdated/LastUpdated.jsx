import React from 'react';
import * as S from './styled';

const LastUpdated = () => {
  const updatedAt = '11:59pm';
  return (
    <S.LastUpdated>
      <S.Indicator />
      <S.Text>Last updated at {updatedAt}</S.Text>
    </S.LastUpdated>
  );
};

export default LastUpdated;
