import styled from 'styled-components';

interface FontSelectionProps {
  showFontMenu: boolean;
}

const NavBar = styled.header`
  display: flex;
`;

const Logo = styled.div`
  margin-right: auto;
`;

const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  button {
    min-width: 4rem;
    height: 2rem;
  }

  svg {
    color: ${({ theme }) => theme.moonIcon};
  }
`;

const FontSelection = styled.select<FontSelectionProps>`
  background: transparent;
  color: inherit;
  font-family: inherit;
  border: none;
  display: ${({ showFontMenu }) => (showFontMenu ? 'block' : 'none')};

  -o-appearance: none;
  -ms-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export default { NavBar, Logo, ThemeToggle, FontSelection };
