import styled from 'styled-components';

interface FontSelectionProps {
  showFontMenu: boolean;
}

interface FontButtonProps {
  showFontMenu: boolean;
}

const NavBar = styled.header`
  display: flex;
  align-items: center;
  padding-top: 2.4rem;
`;

const Logo = styled.div`
  margin-right: auto;
  width: 2.9rem;
`;

const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  button {
    min-width: 4rem;
    height: 2rem;
    min-width: 4rem;
    margin-right: 1rem;
  }

  svg {
    color: ${({ theme }) => theme.moonIcon};
  }
`;

const FontSelectionContainer = styled.div`
  position: relative;
  margin-right: 1.8rem;

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
  font-size: 1.4rem;
  text-transform: capitalize;
  margin-right: 1.7rem;

  img {
    margin-left: 1.2rem;
    transform: rotate(
      ${({ showFontMenu }) => (showFontMenu ? '180deg' : '0deg')}
    );
    transition: transform 0.25s ease-in;
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
  font-size: 0;
  background-color: ${({ theme }) => theme.fontButtonBackground};
  border-radius: 16px;
  padding: 1rem 0;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);

  li button {
    width: 100%;
    background-color: transparent;
    color: ${({ theme }) => theme.mainText};
    border: none;
    cursor: pointer;

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
