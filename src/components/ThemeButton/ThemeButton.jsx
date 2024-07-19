import React, { useState } from 'react';
import * as S from './styled';

const ThemeButton = () => {
  const [theme, setTheme] = useState('dark');

  const onClick = () => {
    setTheme(theme => (theme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <S.Button onClick={onClick}>
      <S.Circle switched={theme === 'light'} />
    </S.Button>
  );
};

export default ThemeButton;
