import NavBar from './components/NavBar/NavBar';
import WordSearch from './components/WordSearch/WordSearch';
import { useFontContext } from './hooks/context';
import GlobalStyle from './styles/Global.styled';
import { ThemeProvider } from 'styled-components';
import { useThemeContext } from './hooks/theme';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const font = useFontContext();
  const theme = useThemeContext();
  return (
    <div>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle font={font} />
        <NavBar />
        <WordSearch />
      </ThemeProvider>
    </div>
  );
}

export default App;
