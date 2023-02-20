import searchIcon from '../../../assets/images/icon-search.svg';

const SearchBar = () => {
  return (
    <form aria-label="form for searching word">
      <label>
        <input type="search" placeholder="Search for any word..." />
      </label>

      <button aria-label="button to launch search for word">
        <img src={searchIcon} alt="search icon" />
      </button>
    </form>
  );
};

export default SearchBar;
