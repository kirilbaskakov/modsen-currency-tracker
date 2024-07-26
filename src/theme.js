export const darkTheme = {
  colors: {
    title: `linear-gradient(
      90deg,
      #00ce2c 0.18%,
      #aedf23 49.3%
    )`,
    heroBg: `linear-gradient(
      259deg,
      rgba(18, 18, 18, 1) 10%,
      rgba(36, 121, 64, 0.25) 50%,
      rgba(18, 18, 18, 1) 90%
    )`,
    indicator: '#00bc4f',
    indicatorShadow: '#26471f',
    mainBg: '#000',
    cardBg: '#202025',
    darkGray: '#474747',
    lightGray: '#898989',
    primary: '#fff',
    secondary: '#d9d9d9',
    cardSubtitle: '#a7b2c3',
    green: '#16c782',
    red: '#ea3943'
  },

  fs: {
    veryLarge: '4.75rem',
    large: '2rem',
    medium: '1.5rem',
    small: '1.25rem'
  }
};

export const lightTheme = {
  ...darkTheme,
  colors: {
    ...darkTheme.colors,
    title: `linear-gradient(
      90deg,
      #00ce2c 0.18%,
      #9bcc10 49.3%
    )`,
    heroBg: `linear-gradient(
      259deg,
      rgba(245, 245, 245, 1) 10%,
      rgba(40, 125, 68, 0.35) 50%,
      rgba(245, 245, 245, 1) 90%
    )`,
    primary: '#000',
    secondary: '#797979',
    mainBg: '#fff',
    cardBg: '#f0f0f5',
    darkGray: '#979797',
    lightGray: '#898989',
    cardSubtitle: '#8792a3',
    indicatorShadow: '#559c46'
  }
};
