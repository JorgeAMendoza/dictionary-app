import { DefaultTheme } from 'styled-components';

// so lets do it by the way teh component/html is structured.

export const lightTheme: DefaultTheme = {
  background: '#FFFFFF',
  mainText: '#2D2D2D',
  searchBackground: '#F4F4F4',
  moonIcon: '#757575',
  themeButtonBackground: '#757575',
  fontButtonBackground: '#FFFFFF',
  fontButtonShadow: 'rgba(0, 0, 0, 0.1)',
};

export const darkTheme: DefaultTheme = {
  background: '#050505',
  mainText: '#FFFFFF',
  searchBackground: '#1F1F1F',
  moonIcon: '#A445ED',
  themeButtonBackground: '#a445ed',
  fontButtonBackground: '#1F1F1F',
  fontButtonShadow: '#A445ED',
};
