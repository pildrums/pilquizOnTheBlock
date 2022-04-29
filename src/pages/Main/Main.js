// modules
import styled from "styled-components";

// components
import Container from "components/Container/Container";
import Button from "components/Button/Button";

// etc.
import cover from 'assets/images/img0.png';

const Main = () => {
  return (
    <Container>
      <Title>애니멀 퀴즈 온더 블록</Title>
      <SubTitle>
        나는 일론머스크에 대해 얼마나 알고 있을까?
      </SubTitle>
      <StyledImage src={cover} alt='cover' />
      <Text>
        2021년 6월 프론트엔드 개발자 필드럼의 도지코인 200만원 중
        170만원을 나락으로 보내버린 일론머스크에 대해 얼마나 알고 계신가요?
      </Text>
      {/* to를 props에 작성 -> Button 컴포넌트에 to 전달 */}
      <Button to="/quiz">필퀴즈? Yes!</Button>
    </Container>
  );
};

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;
  color: ${(props) => props.theme.primaryColor100};
`;

const SubTitle = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
  color: ${(props) => props.theme.gray80};
`;

const StyledImage = styled.img`
  border-radius: 16px;
  opacity: 80%;
  margin-bottom: 16px;
  max-width: 100%;
  display: block;
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
`;

export default Main;