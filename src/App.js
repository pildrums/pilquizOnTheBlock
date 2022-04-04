import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Main from 'pages/Main/Main';
import Quiz from 'pages/Quiz/Quiz';
import Loading from 'pages/Loading/Loading';
import Result from 'pages/Result/Result';
import { QUIZ } from 'constants';

const App = () => {
  const [score, setScore] = useState(0);
  const convertedScore = Math.floor((score / QUIZ.length) * 100);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quiz" element={<Quiz setScore={setScore} />} />
        <Route path="/loading" element={<Loading convertedScore={convertedScore} />} />
        <Route path="/result/:character" element={<Result convertedScore={convertedScore} setScore={setScore} />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;