import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Container from '../../components/Container/Container';
import Spinner from '../../components/Spinner/Spinner';

const onCharacter = (score) => {
  let char;
  if (score > 75) {
    char = 'elon';
  } else if (score > 50) {
    char = 'kimbal';
  } else if (score > 25) {
    char = 'bezos';
  } else {
    char = 'timemachine';
  }
  return char;
}

const Loading = ({ convertedScore }) => {
  const [title, setTitle] = useState("결과 분석중");

  const navigate = useNavigate();

  const character = onCharacter(convertedScore);

  useEffect(() => {
    const id = setTimeout(() => {
      setTitle(title => title + ".");
    }, 700);
    return () => clearTimeout(id);
  }, [title]);

  useEffect(() => {
    setTimeout(() => navigate(`/result/${character}`), 2700);
  }, [navigate, character]);

  return (
    <Container>
      <Title>{title}</Title>
      <Spinner />
    </Container>
  );
};

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 8px;
  margin-bottom: 96px;
  text-align: center;
`;

export default Loading;