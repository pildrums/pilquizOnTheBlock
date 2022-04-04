// modules
import { useState } from 'react';
import { QUIZ } from 'constants';
import { useNavigate } from 'react-router-dom';

// components
import Container from 'components/Container/Container';
import AnswerGroup from 'components/AnswerGroup/AnswerGroup';
import QuestionSection from 'components/QuestionSection/QuestionSection';

const Quiz = ({setScore}) => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate(); 

  const onAnswer = isCorrect => {
    if (isCorrect) {
      setScore(score => score + 1);
    }
    // 마지막 문제 체크
    if (current === QUIZ.length - 1) {
      navigate('/loading');
    } else {
      setCurrent(current => current + 1);
    };
  };

  return (
    <Container>
      <QuestionSection current={current} />
      <AnswerGroup current={current} onAnswer={onAnswer} />
    </Container>
  );
};

export default Quiz;