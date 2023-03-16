import styled from 'styled-components';

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

const FontSelection = styled.select`
  background: transparent;
  color: inherit;
  font-family: inherit;
  border: none;
`;

export default { NavBar, Logo, ThemeToggle, FontSelection };
