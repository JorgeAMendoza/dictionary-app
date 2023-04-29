import { Container } from '../../styles/utils/Container.styled';
import Styled from './Loading.styled';

const Loading = () => {
  return (
    <Container>
      <Styled.LoadingSpinner>
        <Styled.Spinner dimension="20" />
      </Styled.LoadingSpinner>
    </Container>
  );
};

export default Loading;
