import { useState } from 'react';
import searchIcon from '../../assets/images/icon-search.svg';
import { Container } from '../../styles/utils/Container.styled';
import Styled from './SearchBar.styled';

interface SearchBarProps {
  setWord: React.Dispatch<string>;
}

const SearchBar = ({ setWord }: SearchBarProps) => {
  const [search, setSearch] = useState('keyboard');
  const [error, setError] = useState('');

  return (
    <Container>
      <Styled.Search
        error={error ? true : false}
        aria-label="form for searching word"
        onSubmit={(e) => {
          e.preventDefault();
          if (!search) {
            setError("Whoops, can't be empty...");
            return;
          }
          setError('');
          setWord(search);
        }}
      >
        <label>
          <input
            type="search"
            placeholder="Search for any word..."
            onChange={(event) => setSearch(event.target.value)}
            onBlur={(event) => setSearch(event.target.value)}
            value={search}
            data-cy="searchBar"
          />
        </label>
        {error ? (
          <Styled.EmptySearch data-cy="inputErrorText" aria-live="polite">
            {error}
          </Styled.EmptySearch>
        ) : null}

        <button
          aria-label="button to launch search for word"
          data-cy="searchWordButton"
        >
          <img src={searchIcon} alt="search icon" />
        </button>
      </Styled.Search>
    </Container>
  );
};

export default SearchBar;
