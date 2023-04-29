import { Container } from '../../styles/utils/Container.styled';
import Styled from './ErrorMessage.styled';

interface ErrorMessageProps {
  errorTitle: string;
  errorCause: string;
}

const ErrorMessage = ({ errorTitle, errorCause }: ErrorMessageProps) => {
  return (
    <Container>
      <Styled.ErrorMessage id="error-message" data-cy="errorMessage">
        <p>😕</p>
        <h1>{errorTitle}</h1>
        <p>{errorCause}</p>
      </Styled.ErrorMessage>
    </Container>
  );
};

export default ErrorMessage;
