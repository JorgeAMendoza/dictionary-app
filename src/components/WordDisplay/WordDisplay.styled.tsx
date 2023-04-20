import styled from 'styled-components';

const WordDisplay = styled.article`
  margin-block-start: 2.6rem;
`;

const WordTitle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: 'Inconsolata';
    font-size: clamp(3.2rem, 5.5vw + 1rem, 6.4rem);
    font-weight: bold;
  }

  p {
    color: #a445ed;
    align-self: flex-end;
    font-family: 'Inter';
    font-size: clamp(1.8rem, 2vw + 1rem, 2.4rem);
  }

  button {
    width: 4.8rem;
    background-color: transparent;
    border: none;
  }
`;

export default {
  WordDisplay,
  WordTitle,
};
