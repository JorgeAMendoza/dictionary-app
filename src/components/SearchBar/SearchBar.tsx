import { useState } from 'react';
import searchIcon from '../../assets/images/icon-search.svg';

interface SearchBarProps {
  setWord: React.Dispatch<string>;
}

const SearchBar = ({ setWord }: SearchBarProps) => {
  const [search, setSearch] = useState('keyboard');
  const [error, setError] = useState('');

  return (
    <form
      aria-label="form for searching word"
      onSubmit={(e) => {
        e.preventDefault();
        if (!search) {
          setError("Whoops, can't be empty...");
          return;
        }
        setWord(search);
      }}
    >
      <div>
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
        {error ? <p>{error}</p> : null}
      </div>

      <button
        aria-label="button to launch search for word"
        data-cy="searchWordButton"
      >
        <img src={searchIcon} alt="search icon" />
      </button>
    </form>
  );
};

export default SearchBar;
