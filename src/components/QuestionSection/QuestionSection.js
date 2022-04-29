import React from 'react';
import styled from 'styled-components';
import { QUIZ } from 'constants';

const QuestionSection = ({ current }) => {
  return (
    <QuestionSectionWrapper>
      <PageLabel>
        <span>{QUIZ[current].id}</span>/{QUIZ.length}
      </PageLabel>
      <img src={QUIZ[current].img} alt="" />
      <QuestionTitle>{QUIZ[current].question}</QuestionTitle>
    </QuestionSectionWrapper>
  );
};

const QuestionSectionWrapper = styled.div`
  margin-bottom: 16px;
  img {
    width: 200px;
    height: 200px;
  }
`;
const PageLabel = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;
const QuestionTitle = styled.div`
  font-size: 20px;
  margin-bottom: 8px;
`;

export default QuestionSection;
