import styled from 'styled-components';

const Meaning = styled.section`
  h2 {
    font-size: 1.8rem;
    position: relative;
    margin-bottom: 2.5rem;

    &::after {
      content: '';
      position: absolute;
      top: 1rem;
      right: 0;
      height: 1px;
      width: 81%;
      background-color: ${({ theme }) => theme.meaningHeaderLine};
    }
  }

  h3 {
    font-size: 1.6rem;
    color: #757575;
    font-weight: lighter;
  }

  & > *:not(h2, :last-child) {
    margin-block-end: 1.8rem;
  }
`;

const DefinitionList = styled.ul`
  margin-block-start: 1.5rem;

  li {
    font-size: 1.5rem;
    display: grid;
    grid-template-columns: 0 1fr;
    gap: 1.75em;

    p {
      line-height: 1.65;
    }

    p:nth-of-type(2) {
      color: #757575;
      margin-top: 1rem;
    }

    &:not(:last-of-type) {
      margin-bottom: 1.1rem;
    }

    &::before {
      content: '•';
      color: #a445ed;
    }
  }
`;

const Call = styled.div`
  display: flex;

  h3 {
    margin-right: 3.3rem;
  }
`;

const CallList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li p {
    color: #a445ed;
  }
`;

export default {
  Meaning,
  DefinitionList,
  Call,
  CallList,
};
