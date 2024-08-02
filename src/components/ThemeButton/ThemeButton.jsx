import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Button, Circle } from './styled';

const ThemeButton = () => {
  const { toggleTheme, themeType } = useTheme();

  return (
    <Button onClick={toggleTheme} data-testid="theme-button">
      <Circle $switched={themeType === 'light'} />
    </Button>
  );
};

export default ThemeButton;
