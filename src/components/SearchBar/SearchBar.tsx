import { useState } from 'react';
import searchIcon from '../../assets/images/icon-search.svg';

interface SearchBarProps {
  setWord: React.Dispatch<string>;
}

const SearchBar = ({ setWord }: SearchBarProps) => {
  const [search, setSearch] = useState('keyboard');
  return (
    <form
      aria-label="form for searching word"
      onSubmit={(e) => {
        e.preventDefault();
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

      <button aria-label="button to launch search for word">
        <img src={searchIcon} alt="search icon" />
      </button>
    </form>
  );
};

export default SearchBar;
