import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <HomeInner>
      <HomeImg />
      <HomeTitle>
        <div className="title-main">HAR ILL APP</div>
        <div className="title-sub">목표를 위해 작은거 부터 하나씩</div>
      </HomeTitle>
      <HomeButton>
        <button>
          <p>
            <Link to="/todo">시작하기</Link>
          </p>
        </button>
      </HomeButton>
    </HomeInner>
  );
};

export default Home;

const HomeInner = styled.div`
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  padding: 20px 0;
`;

const HomeImg = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
  background: url('/images/run.png');
  background-repeat: no-repeat;
  background-size: 400px;
  background-position: center;
`;

const HomeTitle = styled.div`
  width: 100%;
  margin: 40px 0;
  text-align: center;
  .title-main {
    margin-bottom: 30px;
    font-size: 55px;
    font-weight: 700;
    color: #002b5b;
  }
  .title-sub {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 400;
    color: #002b5b;
  }
`;

const HomeButton = styled.div`
  width: 100%;
  margin-top: 50px;
  text-align: center;
  button {
    width: 30%;
    height: 5%;
    color: #fff;
    font-size: 23px;
    border-style: none;
    border-radius: 15px;
    background-color: #002b5b;
    padding: 15px;
    cursor: pointer;
    &:hover {
      background-color: rgb(28, 56, 121, 0.5);
    }
    a {
      color: #fff;
    }
    p {
      padding: 4px;
    }
  }
`;
