import bookLogo from '../../assets/images/logo.svg';
import { Fonts } from '../../context/font-context';
import { useFontActionContext } from '../../hooks/context';

const NavBar = () => {
  const setFont = useFontActionContext();

  return (
    <header>
      <div>
        <img src={bookLogo} alt="website logo" />
      </div>

      <select
        id="font-select"
        aria-expanded="false"
        onChange={(e) => {
          let font: Fonts = 'mono';

          switch (e.target.value as Fonts) {
            case 'sans-serif': {
              font = 'sans-serif';
              break;
            }
            case 'serif': {
              font = 'serif';
              break;
            }
            default: {
              font = 'mono';
            }
          }

          if (setFont !== null) setFont(font);
        }}
      >
        <option value="sans-serif">Sans Serif</option>
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
