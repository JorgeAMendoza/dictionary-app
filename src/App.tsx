import NavBar from './components/NavBar/NavBar';
import WordSearch from './components/WordSearch/WordSearch';
import { useFontContext } from './hooks/context';
import GlobalStyle from './styles/Global.styled';

function App() {
  const font = useFontContext();
  return (
    <div>
      <GlobalStyle font={font} />
      <NavBar />
      <WordSearch />
    </div>
  );
}

export default App;
