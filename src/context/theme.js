import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '@/constants/theme';

export function CustomThemeProvider({ children }) {
  const [themeType, setThemeType] = useState('dark');

  const toggleTheme = () => {
    setThemeType(theme => (theme === 'dark' ? 'light' : 'dark'));
  };

  const theme = themeType === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={{ ...theme, toggleTheme, themeType }}>
      <div data-testid={themeType} />
      {children}
    </ThemeProvider>
  );
}

CustomThemeProvider.propTypes = {
  children: PropTypes.node
};
