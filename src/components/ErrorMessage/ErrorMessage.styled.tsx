import styled from 'styled-components';
import { fadeIn } from '../../styles/utils/animations';

export const ErrorMessage = styled.section`
  margin-block-start: 12.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2.8rem;
  animation: ${fadeIn} 0.5s linear forwards;

  p:first-of-type {
    font-size: 6rem;
  }
  p:last-of-type {
    font-size: 1.8rem;
    color: #757575;
  }
  h1 {
    font-size: 2rem;
  }
`;

export default {
  ErrorMessage,
};
