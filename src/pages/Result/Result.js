import { useParams } from 'react-router-dom';
import Container from 'components/Container/Container';
import ResultSection from 'components/ResultSection/ResultSection';
import Button from 'components/Button/Button';

const Result = ({ setScore, convertedScore }) => {
  // const { character } = useParams();
  return (
    <Container>
      <ResultSection convertedScore={convertedScore} />
      <Button onClick={() => setScore(0)} to='/'>
        테스트 다시하기
      </Button>
    </Container>
  );
};

export default Result;
