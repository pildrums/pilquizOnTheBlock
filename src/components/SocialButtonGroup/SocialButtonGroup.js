import React from 'react';
import styled from 'styled-components';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from "react-share";
import { CopyToClipboard } from 'react-copy-to-clipboard';

// import kakao from 'assets/images/kakao.png';

// react-share
const SocialButtonGroup = () => {
  const currentUrl = window.location.href;
  return (
    <FlexContainer>
      <Title>나의 결과 공유하기</Title>
      <GridContainer>
        <FacebookShareButton>
          <FacebookIcon size={48} round={true} borderRadius={24} />
        </FacebookShareButton>
        <TwitterShareButton>
          <TwitterIcon size={48} round={true} borderRadius={24} />
        </TwitterShareButton>
        <CopyToClipboard text={currentUrl}>
          <URLShareButton>URL</URLShareButton>
        </CopyToClipboard>
        {/* <KakaoShareButton>
          <KakaoIcon src={kakao} />
        </KakaoShareButton> */}
      </GridContainer>
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 8px;
  font-weight: 700;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 48px);
  grid-column-gap: 8px;
  justify-content: center;
  align-items: center;
`;

const URLShareButton = styled.button`
  width: 48px;
  height: 48px;
  color: #fff;
  border-radius: 24px;
  border: 0px;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.primaryColor100};
`;

const KakaoShareButton = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`;

const KakaoIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

export default SocialButtonGroup;