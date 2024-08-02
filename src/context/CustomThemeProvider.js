import { useState } from 'react';
import { darkTheme, lightTheme } from '@/constants/theme';
import { ThemeProvider } from 'styled-components';

const CustomThemeProvider = ({ children }) => {
  const [themeType, setThemeType] = useState('dark');

  const toggleTheme = () => {
    setThemeType(themeType => (themeType === 'dark' ? 'light' : 'dark'));
  };

  const theme = themeType === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={{ ...theme, toggleTheme, themeType }}>
      <div data-testid={themeType} />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
