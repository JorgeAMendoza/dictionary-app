import styled from 'styled-components';
import device from '../../styles/utils/device';

const WordDisplay = styled.article`
  margin-block-start: 2.6rem;

  & > *:not(:last-child) {
    margin-block-end: 3rem;
  }

  @media screen and (${device.tablet}) {
    margin-block-start: 4.2rem;
  }
`;

const WordTitle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: 'Inconsolata';
    font-size: 3.2rem;
    font-weight: bold;
  }

  p {
    color: #a445ed;
    align-self: flex-end;
    font-family: 'Inter';
    font-size: clamp(1.8rem, 2vw + 1rem, 2.4rem);

    @media screen and (${device.tablet}) {
      line-height: 1;
    }

    @media screen and (${device.laptopL}) {
      line-height: 1.2;
    }
  }

  button {
    width: 4.8rem;
    &:disabled {
      opacity: 0.2;
    }

    svg {
      height: min-content;
    }

    &:focus-visible,
    &:hover,
    &:active {
      svg {
        circle {
          opacity: 1;
        }
        path {
          fill: #fff;
        }
      }
    }

    @media screen and (${device.tablet}) {
      width: 7.5rem;
    }
  }

  @media screen and (${device.tablet}) {
    h1 {
      font-size: 6.4rem;
    }
  }
`;

export default {
  WordDisplay,
  WordTitle,
};
