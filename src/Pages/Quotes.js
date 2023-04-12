import styled from 'styled-components';

// 추후 구현예정
const Quotes = () => {
  return (
    <QuotesBlock>
      <h2>Qutoes</h2>
      <p>여기는 인용문 추천입니다</p>
    </QuotesBlock>
  );
};

export default Quotes;

const QuotesBlock = styled.div`
  width: 520px;
  height: 750px;
  position: relative; // todo 템플릿을 부모위치로 설정하기위해
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 2 5 rgba(0, 0, 0, 0.5);
  margin: 96px auto 32px;
  display: flex;
  flex-direction: column;
`;
