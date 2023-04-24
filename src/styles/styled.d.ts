import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    mainText: string;
    searchBackground: string;
    searchText: string;
    moonIcon: string;
    fontButtonBackground: string;
    fontButtonShadow: string;
    themeButtonBackground: string;
    meaningHeaderLine: string;
  }
}
