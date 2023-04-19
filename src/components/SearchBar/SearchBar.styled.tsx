import styled from 'styled-components';
import device from '../../styles/utils/device';

const SearchBar = styled.form`
  margin-top: 2.3rem;

  @media screen and (${device.tablet}) {
    margin-top: 5.3rem;
  }
`;

const Search = styled.div`
  background-color: ${({ theme }) => theme.searchBackground};
  border-radius: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 4.8rem;
  padding: 0 1.5em;

  label {
    font-family: inherit;
    width: 90%;
    outline-color: red;
  }
  input {
    background-color: transparent;
    font-family: inherit;
    font-weight: 400;
    font-size: clamp(1.6rem, 5vw + 1rem, 2rem);
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
  }
`;

export default { SearchBar, Search };
