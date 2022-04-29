import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return (
    <FlexBox>
      <ContainerWrapper>{children}</ContainerWrapper>
    </FlexBox>
  );
};

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerWrapper = styled.div`
  width: 400px;
  margin: 72px;
  display: flex;
  flex-direction: column;
`;

export default Container;
