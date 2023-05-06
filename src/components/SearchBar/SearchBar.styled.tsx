import styled from 'styled-components';
import device from '../../styles/utils/device';

interface SearchProps {
  error: boolean;
}

const Search = styled.form<SearchProps>`
  background-color: ${({ theme }) => theme.searchBackground};
  border-radius: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 4.8rem;
  padding: 0 1.5em;
  position: relative;
  margin-top: 2.3rem;
  ${({ error }) => (error ? 'border: 1px solid #ff5252;' : '')}

  label {
    font-family: inherit;
    width: 90%;
  }
  input {
    background-color: transparent;
    font-family: inherit;
    font-weight: 400;
    font-size: clamp(1.6rem, 2vw + 1rem, 2rem);
    color: ${({ theme }) => theme.searchText};
    padding-top: 0.2rem;
    width: 100%;
    outline: none;

    &:focus-visible {
      outline-color: transparent;
    }
  }

  button {
    background-color: transparent;
    border: none;
  }

  &:focus-within {
    outline: 1px solid #a445ed;
  }

  @media screen and (${device.tablet}) {
    min-height: 6.4rem;
    margin-top: 5.3rem;
  }
`;

const EmptySearch = styled.p`
  position: absolute;
  top: 5rem;
  left: 0;
  font-size: clamp(1.5rem, 1vw + 1rem, 2rem);
  color: #ff5252;

  @media screen and (${device.tablet}) {
    top: 7rem;
  }
`;

export default { Search, EmptySearch };
