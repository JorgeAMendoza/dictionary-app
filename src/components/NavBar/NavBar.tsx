import bookLogo from '../../assets/images/logo.svg';

const NavBar = () => {
  return (
    <header>
      <div>
        <img src={bookLogo} alt="website logo" />
      </div>

      <select id="font-select" aria-expanded="false">
        <option value="sans serif">Sans Serif</option>
        <option value="serif">Serif</option>
        <option value="mono">mono</option>
      </select>

      <div>
        <input type="checkbox" aria-label="toggle to light theme" />
      </div>
    </header>
  );
};

export default NavBar;
