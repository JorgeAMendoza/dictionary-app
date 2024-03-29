import bookLogo from '../../assets/images/logo.svg';
import { Fonts } from '../../context/font-context';
import { useFontActionContext, useFontContext } from '../../hooks/context';
import { useThemeActionContext, useThemeContext } from '../../hooks/theme';
import Moon from '../Icons/Moon';
import Styled from './Navbar.styled';
import arrowIcon from '../../assets/images/icon-arrow-down.svg';
import { useState } from 'react';
import { Container } from '../../styles/utils/Container.styled';
import useOutsideClick from '../../hooks/useOutsideClick';

const NavBar = () => {
  const [showFontMenu, setShowFontMenu] = useState(false);
  const font = useFontContext();
  const setFont = useFontActionContext();
  const setTheme = useThemeActionContext();
  const theme = useThemeContext();
  const menu = useOutsideClick(() => setShowFontMenu(false));

  const changeFont = (fontSelection: Fonts) => {
    console.log(fontSelection, font);
    if (fontSelection === font) return;

    if (setFont) setFont(fontSelection);
    setShowFontMenu(false);
  };

  return (
    <Container>
      <Styled.NavBar>
        <Styled.Logo>
          <img src={bookLogo} alt="website logo" />
        </Styled.Logo>

        <Styled.FontSelectionContainer ref={menu}>
          <Styled.FontButton
            showFontMenu={showFontMenu}
            aria-controls="font-select"
            aria-label={`click to change font, current font is ${font}`}
            onClick={() => setShowFontMenu(!showFontMenu)}
          >
            {font} <img src={arrowIcon} alt="" />
          </Styled.FontButton>
          <Styled.FontSelection
            showFontMenu={showFontMenu}
            id="font-select"
            data-cy="fontSelect"
            aria-expanded={showFontMenu}
            aria-hidden={showFontMenu}
          >
            <li>
              <button
                onClick={() => changeFont('sans-serif')}
                aria-label="click to change font to sans-serif"
              >
                sans-serif
              </button>
            </li>
            <li>
              <button
                onClick={() => changeFont('serif')}
                aria-label="click to change font to serif"
              >
                serif
              </button>
            </li>
            <li>
              <button
                onClick={() => changeFont('mono')}
                aria-label="click to change font to mono"
              >
                mono
              </button>
            </li>
          </Styled.FontSelection>
        </Styled.FontSelectionContainer>

        <Styled.ThemeToggle mode={theme}>
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
    </Container>
  );
};

export default NavBar;
