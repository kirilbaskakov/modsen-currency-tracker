import React from 'react';
import { useTheme } from 'styled-components';

import { Button, Circle } from './styled';

function ThemeButton() {
  const { toggleTheme, themeType } = useTheme();

  return (
    <Button onClick={toggleTheme} data-testid="theme-button">
      <Circle $switched={themeType === 'light'} />
    </Button>
  );
}

export default ThemeButton;
