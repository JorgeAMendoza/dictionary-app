import bookLogo from '../../assets/images/logo.svg';
import { Fonts } from '../../context/font-context';
import { useFontActionContext } from '../../hooks/context';
import { useThemeActionContext, useThemeContext } from '../../hooks/theme';
import Moon from '../Icons/Moon';
import Styled from './Navbar.styled';
import arrowIcon from '../../assets/images/icon-arrow-down.svg';

const NavBar = () => {
  const setFont = useFontActionContext();
  const setTheme = useThemeActionContext();
  const theme = useThemeContext();

  return (
    <Styled.NavBar>
      <Styled.Logo>
        <img src={bookLogo} alt="website logo" />
      </Styled.Logo>

      <div>
        <Styled.FontSelection
          id="font-select"
          data-cy="fontSelect"
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
        </Styled.FontSelection>
        <img src={arrowIcon} alt="" />
      </div>

      <Styled.ThemeToggle>
        <button
          role="switch"
          aria-checked={theme === 'dark' ? true : false}
          aria-label={`click to change theme to ${
            theme === 'dark' ? 'light' : 'dark'
          }`}
          onClick={() => {
            if (setTheme) setTheme(theme === 'dark' ? 'light' : 'dark');
          }}
        />
        <Moon />
      </Styled.ThemeToggle>
    </Styled.NavBar>
  );
};

export default NavBar;
