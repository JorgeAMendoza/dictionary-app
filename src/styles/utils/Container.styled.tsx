import styled from 'styled-components';
import device from './device';

export const Container = styled.div`
  width: 88%;
  margin: 0 auto;

  @media screen and (${device.tablet}) {
    width: min(90%, 73.6rem);
  }
`;
