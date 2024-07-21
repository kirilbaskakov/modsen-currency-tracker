import React, { useState } from 'react';
import * as S from './styled';
import { useTheme } from 'styled-components';

const ThemeButton = () => {
  const { toggleTheme, themeType } = useTheme();

  return (
    <S.Button onClick={toggleTheme}>
      <S.Circle switched={themeType === 'light'} />
    </S.Button>
  );
};

export default ThemeButton;
