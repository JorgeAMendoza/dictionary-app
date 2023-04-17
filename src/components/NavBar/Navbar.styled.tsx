import styled from 'styled-components';
import { Theme } from '../../context/theme-context';
import device from '../../styles/utils/device';

interface FontSelectionProps {
  showFontMenu: boolean;
}

interface FontButtonProps {
  showFontMenu: boolean;
}

interface ThemeToggleProps {
  mode: Theme;
}

const NavBar = styled.header`
  display: flex;
  align-items: center;
  padding-top: 2.4rem;

  @media screen and (${device.tablet}) {
    padding-top: 5.7rem;
  }
`;

const Logo = styled.div`
  margin-right: auto;
  width: 2.9rem;

  @media screen and (${device.tablet}) {
    width: 3.2rem;
  }
`;

const ThemeToggle = styled.div<ThemeToggleProps>`
  display: flex;
  align-items: center;
  button {
    height: 2rem;
    min-width: 4rem;
    margin-right: 1.1rem;
    border-radius: 10px;
    border: none;
    background-color: ${({ theme }) => theme.themeButtonBackground};
    position: relative;
    isolation: isolate;
    transition: background-color 0.25s linear;
  }

  button::after {
    content: '';
    position: absolute;
    height: 1.4rem;
    width: 1.4rem;
    top: 0;
    bottom: 0;
    left: 0;
    transform: translate(
      ${({ mode }) => (mode === 'dark' ? '160%' : '20%')},
      20%
    );
    border-radius: 50%;
    background-color: #fff;
    z-index: 1;
    transition: transform 0.25s linear;
  }

  svg {
    color: ${({ theme }) => theme.moonIcon};
  }

  @media screen and (${device.tablet}) {
    button {
      margin-right: 1.8rem;
    }
  }
`;

const FontSelectionContainer = styled.div`
  position: relative;
  margin-right: 1.7rem;

  &::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 3.2rem;
    background-color: #e9e9e9;
    transform: rotate(180deg) translateY(25%);
    right: 0rem;
    top: 0.2rem;
  }

  @media screen and (${device.tablet}) {
    margin-right: 3.6rem;

    &::after {
      top: 0.6rem;
      right: -1rem;
    }
  }
`;

const FontButton = styled.button<FontButtonProps>`
  background-color: transparent;
  color: ${({ theme }) => theme.mainText};
  border: none;
  outline-color: transparent;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-family: inherit;
  font-size: clamp(1.4rem, 5vw + 1rem, 1.8rem);
  text-transform: capitalize;
  margin-right: 1.7rem;

  img {
    margin-left: 1.2rem;
    transform: rotate(
      ${({ showFontMenu }) => (showFontMenu ? '180deg' : '0deg')}
    );
    transition: transform 0.25s ease-in;
  }

  @media screen and (${device.tablet}) {
    img {
      margin-left: 1.3rem;
    }
  }
`;

const FontSelection = styled.ul<FontSelectionProps>`
  width: 13.3rem;
  color: inherit;
  font-family: inherit;
  border: none;
  display: ${({ showFontMenu }) => (showFontMenu ? 'flex' : 'none')};
  position: absolute;
  top: 2.8rem;
  right: 1.2rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.fontButtonBackground};
  border-radius: 16px;
  padding: 1rem 0;
  box-shadow: 0 5px 30px ${({ theme }) => theme.fontButtonShadow};

  li button {
    width: 100%;
    background-color: transparent;
    color: ${({ theme }) => theme.mainText};
    border: none;
    cursor: pointer;
    font-size: clamp(1.4rem, 5vw + 1rem, 1.6rem);

    &:hover,
    &:focus-visible {
      color: #a445ed;
    }
  }

  li:not(:last-of-type) button {
    margin-bottom: 1rem;
  }
`;

export default {
  NavBar,
  Logo,
  ThemeToggle,
  FontSelection,
  FontButton,
  FontSelectionContainer,
};
