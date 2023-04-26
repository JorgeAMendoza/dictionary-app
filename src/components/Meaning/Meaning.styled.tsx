import styled from 'styled-components';
import device from '../../styles/utils/device';

const Meaning = styled.section`
  h2 {
    font-size: clamp(1.8rem, 2vw + 1rem, 2.4rem);
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

    @media screen and (${device.tablet}) {
      margin-bottom: 3.5rem;
      &::after {
        width: 88%;
        top: 1.5rem;
      }
    }
  }

  h3 {
    font-size: clamp(1.6rem, 1.5vw + 1rem, 2rem);
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
    font-size: clamp(1.5rem, 1.2vw + 1rem, 1.8rem);
    display: grid;
    grid-template-columns: 0 1fr;
    gap: 2.8rem;

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
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #a445ed;
      margin-top: 1.1rem;
    }

    @media screen and (${device.tablet}) {
      &::before {
        margin-left: 0.5rem;
        margin-top: 1rem;
      }

      p {
        line-height: 1.5;
      }
    }
  }

  @media screen and (${device.tablet}) {
    margin-block-start: 2.4rem;

    li {
      padding-left: 2rem;
    }
  }
`;

const Call = styled.div`
  display: flex;

  h3 {
    margin-right: 3.3rem;
  }

  @media screen and (${device.tablet}) {
    margin-block-start: 3rem;

    h3 {
      margin-right: 3.5rem;
    }
  }
`;

const CallList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  li p {
    font-size: clamp(1.6rem, 1.5vw + 1rem, 2rem);
    color: #a445ed;
  }
`;

export default {
  Meaning,
  DefinitionList,
  Call,
  CallList,
};
