import React from 'react';
import styled from 'styled-components';
// asset
import elon from '../../assets/images/elon.jpg';
import kimbal from '../../assets/images/kimbal.jpg';
import bezos from '../../assets/images/bezos.jpg';
import timemachine from '../../assets/images/timemachine.jpg';

// components
import SocialButtonGroup from '../SocialButtonGroup/SocialButtonGroup';

const RESULT = {
  elon: {
    title: '일론 머스크',
    src: elon
  },
  kimbal: {
    title: '킴벌 머스크',
    src: kimbal
  },
  bezos: {
    title: '제프 베조스',
    src: bezos
  },
  timemachine: {
    title: '과거에서 온 사람',
    src: timemachine
  },
};

const ResultSection = ({character}) => {
  return (
    <>
      <SectionTitle>당신은 혹시?</SectionTitle>
      <StyledImage src={RESULT[character].src} />
      <ResultTitle>{RESULT[character].title}</ResultTitle>
      <SocialButtonGroup />
    </>
  );
};

const SectionTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 8px;
  text-align: center;
`;

const StyledImage = styled.img`
  border-radius: 16px;
  opacity: 80%;
  margin-bottom: 16px;
  max-width: 100%;
  display: block;
`;

const ResultTitle = styled.p`
  font-size: 24px;
  margin-bottom: 56px;
  text-align: center;
`;

export default ResultSection;