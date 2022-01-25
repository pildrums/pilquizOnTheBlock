import React from 'react';
import styled from 'styled-components';
import { QUIZ } from '../../constants';
import Button from '../Button/Button';

const AnswerGroup = ({ current, onAnswer }) => {
  return (
    <AnswerGroupWrapper>
      {QUIZ[current].answer.map((answer, index) => (
        <Button key={index} onClick={() => onAnswer(answer.isCorrect)}>
          {answer.text}
        </Button>
      ))}
    </AnswerGroupWrapper>
  );
};

const AnswerGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

export default AnswerGroup;
