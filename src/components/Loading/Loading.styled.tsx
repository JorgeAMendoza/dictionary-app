import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
  dimension: string;
}

const rotate = keyframes`
from{
    transform: rotate(0deg)
}
to{
    transform: rotate(360deg)
}`;

const LoadingSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 5rem;
`;

const Spinner = styled.div<SpinnerProps>`
  animation: ${rotate} 1.5s linear infinite;
  width: ${({ dimension }) => dimension}rem;
  height: ${({ dimension }) => dimension}rem;
  border: 5px solid white;
  border-radius: 50%;
  border-bottom: 5px solid #a445ed;
`;

export default { LoadingSpinner, Spinner };
