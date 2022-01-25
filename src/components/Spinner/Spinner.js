import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import GridLoader from 'react-spinners/GridLoader';

const Spinner = () => {
  const themeContext = useContext(ThemeContext);
  const color = themeContext.primaryColor100;
  return (
    <FlexWrapper>
      <GridLoader size='40' color={color} />
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Spinner;